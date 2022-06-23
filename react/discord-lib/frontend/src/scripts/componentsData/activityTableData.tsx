import { map, isNil } from 'lodash'
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Column } from '../../@types/table'

export const ACTIVITY_COLUMNS: Column[] = [
  {
    data: 'Type',
    id: 'type',
    minWidth: '150px',
    className: 'type-th',
  },
  {
    data: 'Token ID',
    id: 'tokenId',
    minWidth: '120px',
    className: 'token-id-th',
  },
  {
    data: 'From Address',
    id: 'fromAddress',
    minWidth: '130px',
    className: 'from-address-th',
  },
  {
    data: '',
    id: 'arrow',
    minWidth: '65px',
    className: 'arrow-th',
  },
  {
    data: 'To Address',
    id: 'toAddress',
    minWidth: '130px',
    className: 'to-address-th',
  },
  {
    data: 'In Price',
    id: 'inPrice',
    minWidth: '90px',
    className: 'in-price-th',
  },
  {
    data: 'Hold Time',
    id: 'holdTime',
    minWidth: '90px',
    className: 'hold-time-th',
  },
]

export type ActivityData = {
  id: number
  type: string
  tokenId: string
  fromAddress: string
  arrow: JSX.Element
  toAddress: string
  inPrice: string
  holdTime: string
}

export const ACTIVITY_DATA = (num?: number): ActivityData[] =>
  map(Array(100).fill(null), (_, i) => ({
    id: isNil(num) ? i : i + num,
    type: ['Buy', 'Sell', 'Mint', 'Transfer_In', 'Transfer_Out'][
      Math.floor(Math.random() * 5)
    ],
    tokenId: `#${Math.floor(Math.random() * 1000)}`,
    fromAddress: `0x${Math.floor(Math.random() * 10000000)}`,
    arrow: <BiRightArrowAlt color='#828282' key={i} />,
    toAddress: `0x${Math.floor(Math.random() * 10000000)}`,
    inPrice: `$${Math.floor(Math.random() * 100)}`,
    holdTime: `${Math.floor(Math.random() * 90)}\n minutes`,
  }))
