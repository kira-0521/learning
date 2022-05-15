import React from 'react'
import { CodingTable2 } from '../organisms/Layouts/CodingTable2'
import { TOP_DATA } from '../../scripts/componentsData/walletTopData'

export const TableTest = () => {
  return (
    <div>
      <CodingTable2 dataList={TOP_DATA()} />
    </div>
  )
}
