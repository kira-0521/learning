import React, { FC, useEffect } from 'react'
import { map } from 'lodash'
import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

import { getStickyLeft } from '../../../scripts/utils/dom'

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
  background-color: #414141;
`
const STdCenter = styled.td`
  text-align: center;
  padding: 5px 12px;
  background-color: #414141;
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
  useEffect(() => {
    getStickyLeft('address-th')
  }, [])
  return (
    <Box overflow='scroll' width='100%' height='80vh'>
      <STable>
        <SThead>
          <SHTr>
            {map(TOP_COLUMN, (column) => (
              <STh key={column.id} style={column.style} id={column.id}>
                {column.name}
              </STh>
            ))}
            <SEndCell></SEndCell>
          </SHTr>
        </SThead>
        <STbody>
          {map(dataList, (data: TopData) => (
            <SHTr key={data.address}>
              <STdCenter style={{ position: 'sticky', left: 0, zIndex: 150 }}>
                {data.checkbox}
              </STdCenter>
              <STdCenter
                style={{ position: 'sticky', left: '40px', zIndex: 150 }}>
                {data.rank}
              </STdCenter>
              <STd style={{ position: 'sticky', left: '120px', zIndex: 150 }}>
                {data.address}
              </STd>
              <STd
                style={{
                  position: 'sticky',
                  left: `${120 + getStickyLeft('address-th')}px`,
                  zIndex: 150,
                }}>
                {data.tag}
              </STd>
              <STdBg
                style={{
                  position: 'sticky',
                  left: `${
                    120 + getStickyLeft('address-th') + getStickyLeft('tag-th')
                  }px`,
                  zIndex: 150,
                }}>
                {data.totalProfit}
              </STdBg>
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
