import React, { FC } from 'react'
import { map } from 'lodash'
import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

import {
  TopData,
  TOP_COLUMN,
} from '../../../scripts/componentsData/walletTopData'

type Props = {
  dataList: TopData[]
}

// styled components 定義
const STable = styled.table`
  width: 100%;
  background-color: #414141;
  overflow: auto;
`
const SThead = styled.thead`
  background-color: #414141;
`
const STbody = styled.tbody`
  background-color: #414141;
`
const SHTr = styled.tr`
  padding-right: 30px;
`
const STh = styled.th`
  padding: 10px 0;
  text-align: left;
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: #414141;
`
// スクロールバーとの間
const SEndCell = styled.td`
  min-width: 30px;
`

export const CodingTable2: FC<Props> = ({ dataList }) => {
  return (
    <Box overflow='scroll' width='100%' height='60vh'>
      <STable>
        <SThead>
          <SHTr>
            {map(TOP_COLUMN, (column) => (
              <STh key={column.id} style={{ minWidth: column.minWidth }}>
                {column.name}
              </STh>
            ))}
            <SEndCell></SEndCell>
          </SHTr>
        </SThead>
        <STbody>
          {map(dataList, (data: TopData) => (
            <SHTr key={data.address}>
              <td>{data.checkbox}</td>
              <td>{data.rank}</td>
              <td>{data.address}</td>
              <td>{data.tag}</td>
              <td>{data.totalProfit}</td>
              <td>{data.totalAvgCost}</td>
              <td>{data.portfolioValue}</td>
              <td>{data.totalAvgGasCost}</td>
              <td>{data.totalAvgHoldTime}</td>
              <td>{data.nftsOwned}</td>
              <td>{data.profitPercentage}</td>
              <td>{data.realizedProfit}</td>
              <td>{data.unRealizedProfit}</td>
              <SEndCell></SEndCell>
            </SHTr>
          ))}
        </STbody>
      </STable>
    </Box>
  )
}
