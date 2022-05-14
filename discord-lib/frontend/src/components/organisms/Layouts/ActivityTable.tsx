import React, { useEffect, useState } from 'react'
import { map, isNil } from 'lodash'
import { Box } from '@chakra-ui/react'

import {
  ACTIVITY_COLUMNS,
  ACTIVITY_DATA,
} from '../../../scripts/componentsData/activityTableData'
import '../../../assets/styles/activityTable.css'
import { getDomHight } from '../../../scripts/utils/dom'
import { DRAWER_STYLE_FOR_SUBTRACTION } from '../../../scripts/const'

export const ActivityTable = () => {
  const [scrollDomHeight, setScrollDomHeight] = useState(0)

  useEffect(() => {
    const domHeight = getDomHight(
      ['drawer-header', 'tab-list'],
      DRAWER_STYLE_FOR_SUBTRACTION
    )
    if (!isNil(domHeight)) {
      setScrollDomHeight(domHeight)
    }
  }, [])

  return (
    <Box overflowY='scroll' height={`${scrollDomHeight}px`}>
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
    </Box>
  )
}
