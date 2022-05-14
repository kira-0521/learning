import React from 'react'
import { map } from 'lodash'

import {
  ACTIVITY_COLUMNS,
  ACTIVITY_DATA,
} from '../../../scripts/componentsData/activityTableData'
import '../../../assets/styles/activityTable.css'

export const ActivityTable = () => {
  return (
    <table>
      <thead>
        <tr>
          {map(ACTIVITY_COLUMNS, (column) => (
            <th
              key={column.id}
              style={{ minWidth: column.minWidth }}
              className={column.id === 'inPrice' ? 'in-price' : ''}>
              {column.data}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {map(ACTIVITY_DATA, (data) => (
          <tr key={data.id}>
            <td>{data.type}</td>
            <td>{data.tokenId}</td>
            <td>{data.fromAddress}</td>
            <td>{data.arrow}</td>
            <td>{data.toAddress}</td>
            <td className='in-price'>{data.inPrice}</td>
            <td>{data.holdTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
