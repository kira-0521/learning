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
  border-bottom: 1px solid black;
`
const STh = styled.th`
  padding: 10px 12px;
  text-align: left;
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: #414141;
  border-bottom: 1px solid black;
`
const STd = styled.td`
  padding: 5px 12px;
`
const STdCenter = styled.td`
  text-align: center;
  padding: 5px 12px;
`
const STdBg = styled.td`
  background-color: teal;
  padding: 5px 12px;
`
// スクロールバーとの間
const SEndCell = styled.td`
  min-width: 30px;
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: #414141;
  border-bottom: 1px solid #414141;
`

export const CodingTable2: FC<Props> = ({ dataList }) => {
  return (
    <Box overflow='scroll' width='100%' height='80vh'>
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
              <STdCenter>{data.checkbox}</STdCenter>
              <STdCenter>{data.rank}</STdCenter>
              <STd>{data.address}</STd>
              <STd>{data.tag}</STd>
              <STdBg>{data.totalProfit}</STdBg>
              <STd>{data.totalAvgCost}</STd>
              <STd>{data.portfolioValue}</STd>
              <STd>{data.totalAvgGasCost}</STd>
              <STd>{data.totalAvgHoldTime}</STd>
              <STd>{data.nftsOwned}</STd>
              <STd>{data.profitPercentage}</STd>
              <STd>{data.realizedProfit}</STd>
              <STd>{data.unRealizedProfit}</STd>
              <SEndCell></SEndCell>
            </SHTr>
          ))}
        </STbody>
      </STable>
    </Box>
  )
}
