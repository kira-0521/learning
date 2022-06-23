import React, { useEffect, useState, FC } from 'react'
import { map, isNil } from 'lodash'
import { Box, Spinner } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroller'

import {
  ACTIVITY_COLUMNS,
  ActivityData,
} from '../../../scripts/componentsData/activityTableData'
// import '../../../assets/styles/activityTable.css'
import { getDomHight } from '../../../scripts/utils/dom'
import { DRAWER_STYLE_FOR_SUBTRACTION } from '../../../scripts/const'

type Props = {
  viewList: ActivityData[]
  loadMoreFetch: (page: number) => void
  hasMoreLoad: boolean
}

export const ActivityTable: FC<Props> = ({
  viewList,
  loadMoreFetch,
  hasMoreLoad,
}) => {
  const [scrollDomHeight, setScrollDomHeight] = useState(0)

  useEffect(() => {
    let isMounted = true
    const domHeight = getDomHight(
      ['drawer-header', 'tab-list'],
      DRAWER_STYLE_FOR_SUBTRACTION
    )

    if (isMounted) {
      !isNil(domHeight) && setScrollDomHeight(domHeight)
    }

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <Box overflowY='scroll' height={`${scrollDomHeight}px`}>
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMoreFetch}
        hasMore={hasMoreLoad}
        loader={<Spinner key={0} ml='15px' mt='10px' />}
        useWindow={false}>
        <table key={1}>
          <thead>
            <tr>
              {map(ACTIVITY_COLUMNS, (column) => (
                <th
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                  className={column.className}>
                  {column.data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {map(viewList, (data, i) => (
              <tr key={`${i}_${data.fromAddress}`}>
                <td>{data.type}</td>
                <td className='token-id-td'>{data.tokenId}</td>
                <td>{data.fromAddress}</td>
                <td>{data.arrow}</td>
                <td>{data.toAddress}</td>
                <td className='in-price-td'>{data.inPrice}</td>
                <td>{data.holdTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </Box>
  )
}
