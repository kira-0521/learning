import React, { ReactNode } from 'react'
import { map, isNil } from 'lodash'
import { Image, Checkbox, Flex } from '@chakra-ui/react'

import LEFT_DOWN from '../../assets/svg/arrow_left_down.svg'
import LEFT_UP from '../../assets/svg/arrow_left_up.svg'
import RIGHT_DOWN from '../../assets/svg/arrow_right_down.svg'
import RIGHT_UP from '../../assets/svg/arrow_right_up.svg'
import MULTIPLY from '../../assets/svg/multiply.svg'
import PLUS from '../../assets/svg/plus.svg'
import WAVE_DOWN from '../../assets/svg/wave_arrow_down.svg'
import WAVE_UP from '../../assets/svg/wave_arrow_up.svg'
import WAVE_LEFT from '../../assets/svg/wave_arrow_left.svg'
import WAVE_RIGHT from '../../assets/svg/wave_arrow_right.svg'

export interface TopData {
  id: number
  checkbox: ReactNode
  rank: number
  address: string
  tag: ReactNode
  totalProfit: string
  totalAvgCost: string
  portfolioValue: string
  totalAvgGasCost: string
  totalAvgHoldTime: string
  nftsOwned: string
  profitPercentage: string
  realizedProfit: string
  unRealizedProfit: string
}

export const TOP_COLUMN = [
  {
    id: 'checkbox-th',
    name: '',
    minWidth: '40px',
    className: 'checkbox-th',
  },
  {
    id: 'rank-th',
    name: 'Rank',
    minWidth: '150px',
    className: 'rank-th',
  },
  {
    id: 'address-th',
    name: 'Address',
    minWidth: '150px',
    className: 'address-th',
  },
  {
    id: 'tag-th',
    name: 'Tag',
    minWidth: '150px',
    className: 'tag-th',
  },
  {
    id: 'totalProfit-th',
    name: 'TotalProfit',
    minWidth: '150px',
    className: 'totalProfit-th',
  },
  {
    id: 'totalAvgCost-th',
    name: 'TotalAvgCost',
    minWidth: '150px',
    className: 'totalAvgCost-th',
  },
  {
    id: 'portfolioValue-th',
    name: 'PortfolioValue',
    minWidth: '150px',
    className: 'portfolioValue-th',
  },
  {
    id: 'totalAvgGasCost',
    name: 'TotalAvgGasCost',
    minWidth: '150px',
    className: 'totalAvgGasCost',
  },
  {
    id: 'totalAvgHoldTime',
    name: 'TotalAvgHoldTime',
    minWidth: '150px',
    className: 'totalAvgHoldTime',
  },
  {
    id: 'nftsOwned',
    name: 'NftsOwned',
    minWidth: '150px',
    className: 'nftsOwned',
  },
  {
    id: 'profitPercentage-th',
    name: 'ProfitPercentage',
    minWidth: '150px',
    className: 'profitPercentage-th',
  },
  {
    id: 'realizedProfit-th',
    name: 'RealizedProfit',
    minWidth: '150px',
    className: 'realizedProfit-th',
  },
  {
    id: 'unRealizedProfit-th',
    name: 'UnRealizedProfit',
    minWidth: '150px',
    className: 'unRealizedProfit-th',
  },
]

export const TOP_DATA = (num?: number): TopData[] =>
  map(Array(100).fill(null), (_, i) => ({
    id: isNil(num) ? i : i + num,
    checkbox: <Checkbox />,
    rank: i,
    address: `0x${Math.floor(Math.random() * 10000000)}`,
    tag: (
      <Flex gap='4px' flexWrap='wrap'>
        <Image src={LEFT_DOWN} />
        <Image src={LEFT_UP} />
        <Image src={RIGHT_UP} />
        <Image src={RIGHT_DOWN} />
        <Image src={MULTIPLY} />
        <Image src={PLUS} />
        <Image src={WAVE_DOWN} />
        <Image src={WAVE_LEFT} />
        <Image src={WAVE_RIGHT} />
        <Image src={WAVE_UP} />
      </Flex>
    ),
    totalProfit: `$ ${Math.floor(Math.random() * 10000000)}`,
    totalAvgCost: `$ ${Math.floor(Math.random() * 10000000)}`,
    portfolioValue: `$ ${Math.floor(Math.random() * 10000000)}`,
    totalAvgGasCost: `$ ${Math.floor(Math.random() * 10000000)}`,
    totalAvgHoldTime: `${Math.floor(Math.random() * 100)}\nminutes`,
    nftsOwned: `${Math.floor(Math.random() * 10000000)}`,
    profitPercentage: `${Math.floor(Math.random() * 100)}%`,
    realizedProfit: `$${Math.floor(Math.random() * 10000000)}`,
    unRealizedProfit: `$${Math.floor(Math.random() * 10000000)}`,
  }))

export const convertToTopViewList = (topList: TopData[]) => {
  return {
    scrollFixed: [
      {
        th: {
          name: 'c',
          className: 'checkbox-th',
        },
        td: {
          data: map(topList, 'checkbox'),
          className: 'checkbox-td',
        },
      },
      {
        th: {
          name: 'Rank',
          className: 'rank-th',
        },
        td: {
          data: map(topList, 'rank'),
          className: 'rank-td',
        },
      },
      {
        th: {
          name: 'Address',
          className: 'address-th',
        },
        td: {
          data: map(topList, 'address'),
          className: 'address-td',
        },
      },
      {
        th: {
          name: 'Tag',
          className: 'tag-th',
        },
        td: {
          data: map(topList, 'tag'),
          className: 'tag-td',
        },
      },
      {
        th: {
          name: 'Total Profit',
          className: 'totalProfit-th',
        },
        td: {
          data: map(topList, 'totalProfit'),
          className: 'totalProfit-td',
        },
      },
    ],
    noScrollFixed: [
      {
        th: {
          name: 'totalAvgCost',
          className: 'totalAvgCost-th',
        },
        td: {
          data: map(topList, 'totalAvgCost'),
          className: 'totalAvgCost-td',
        },
      },
      {
        th: {
          name: 'portfolioValue',
          className: 'portfolioValue-th',
        },
        td: {
          data: map(topList, 'portfolioValue'),
          className: 'portfolioValue-td',
        },
      },
      {
        th: {
          name: 'totalAvgGasCost',
          className: 'totalAvgGasCost-th',
        },
        td: {
          data: map(topList, 'totalAvgGasCost'),
          className: 'totalAvgGasCost-td',
        },
      },
      {
        th: {
          name: 'totalAvgHoldTime',
          className: 'totalAvgHoldTime-th',
        },
        td: {
          data: map(topList, 'totalAvgHoldTime'),
          className: 'totalAvgHoldTime-td',
        },
      },
      {
        th: {
          name: 'nftsOwned',
          className: 'nftsOwned-th',
        },
        td: {
          data: map(topList, 'nftsOwned'),
          className: 'nftsOwned-td',
        },
      },
      {
        th: {
          name: 'profitPercentage',
          className: 'profitPercentage-th',
        },
        td: {
          data: map(topList, 'profitPercentage'),
          className: 'profitPercentage-td',
        },
      },
      {
        th: {
          name: 'realizedProfit',
          className: 'realizedProfit-th',
        },
        td: {
          data: map(topList, 'realizedProfit'),
          className: 'realizedProfit-td',
        },
      },
      {
        th: {
          name: 'unRealizedProfit',
          className: 'unRealizedProfit-th',
        },
        td: {
          data: map(topList, 'unRealizedProfit'),
          className: 'unRealizedProfit-td',
        },
      },
    ],
  }
}
