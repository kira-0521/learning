import React, { useEffect, useState, FC } from 'react'
import { map, isNil } from 'lodash'
import { Box } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroller'

import {
  ACTIVITY_COLUMNS,
  ACTIVITY_DATA,
  Data,
} from '../../../scripts/componentsData/activityTableData'
import '../../../assets/styles/activityTable.css'
import { getDomHight } from '../../../scripts/utils/dom'
import { DRAWER_STYLE_FOR_SUBTRACTION } from '../../../scripts/const'

type Props = {
  viewList: Data[]
}

export const ActivityTable: FC<Props> = ({ viewList }) => {
  const [scrollDomHeight, setScrollDomHeight] = useState(0)
  const [bodyList, setBodyList] = useState<Data[]>([])

  const loadMore = (page: number) => {
    console.log('page', page)
  }

  useEffect(() => {
    let isMounted = true
    const domHeight = getDomHight(
      ['drawer-header', 'tab-list'],
      DRAWER_STYLE_FOR_SUBTRACTION
    )

    if (isMounted) {
      !isNil(domHeight) && setScrollDomHeight(domHeight)
      setBodyList(viewList)
    }

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <Box overflowY='scroll' height={`${scrollDomHeight}px`}>
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMore}
        hasMore={true || false}
        loader={
          <div className='loader' key={0}>
            Loading ...
          </div>
        }
        useWindow={false}>
        <table>
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
            {map(ACTIVITY_DATA, (data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td className='token-id'>{data.tokenId}</td>
                <td>{data.fromAddress}</td>
                <td>{data.arrow}</td>
                <td>{data.toAddress}</td>
                <td className='in-price'>{data.inPrice}</td>
                <td>{data.holdTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </Box>
  )
}
