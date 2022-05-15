import React, { FC } from 'react'
import { map } from 'lodash'
import {
  TopData,
  convertToTopViewList,
} from '../../../scripts/componentsData/walletTopData'

import '../../../assets/styles/scrollFixedTableCommon.css'
import '../../../assets/styles/topTable.css'
import { Box } from '@chakra-ui/react'

type Props = {
  topDataList: TopData[]
}

export const CodingTable1: FC<Props> = ({ topDataList }) => {
  const tableData = convertToTopViewList(topDataList)
  return (
    <Box w='100%'>
      <table>
        <thead>
          {map(tableData.scrollFixed, (data) => (
            <tr key={data.th.name}>
              <th
                className={data.th.className}
                style={
                  data.th.name === 'c' ? { color: 'transparent' } : undefined
                }>
                {data.th.name}
              </th>
              {map(data.td.data, (tdData, i) => (
                <td key={`${tdData}_${i}`}>{tdData}</td>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {map(tableData.noScrollFixed, (data) => (
            <tr key={data.th.name}>
              <th className={data.th.className}>{data.th.name}</th>
              {map(data.td.data, (tdData, i) => (
                <td key={`${tdData}_${i}`}>{tdData}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  )
}
