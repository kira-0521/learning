import { map } from 'lodash'
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Column } from '../../@types/table'

export const ACTIVITY_COLUMNS: Column[] = [
  {
    data: 'Type',
    id: 'type',
    minWidth: '150px',
    className: 'type',
  },
  {
    data: 'Token ID',
    id: 'tokenId',
    minWidth: '120px',
    className: 'token-id',
  },
  {
    data: 'From Address',
    id: 'fromAddress',
    minWidth: '130px',
    className: 'from-address',
  },
  {
    data: '',
    id: 'arrow',
    minWidth: '65px',
    className: 'arrow',
  },
  {
    data: 'To Address',
    id: 'toAddress',
    minWidth: '130px',
    className: 'to-address',
  },
  {
    data: 'In Price',
    id: 'inPrice',
    minWidth: '90px',
    className: 'in-price',
  },
  {
    data: 'Hold Time',
    id: 'holdTime',
    minWidth: '90px',
    className: 'hold-time',
  },
]

export type Data = {
  id: number
  type: string
  tokenId: string
  fromAddress: string
  arrow: JSX.Element
  toAddress: string
  inPrice: string
  holdTime: string
}

export const ACTIVITY_DATA: Data[] = map(Array(200).fill(null), (_, i) => ({
  id: i,
  type: ['Buy', 'Sell', 'Mint', 'Transfer_In', 'Transfer_Out'][
    Math.floor(Math.random() * 5)
  ],
  tokenId: `#${Math.floor(Math.random() * 1000)}`,
  fromAddress: `0x${Math.floor(Math.random() * 10000000)}`,
  arrow: <BiRightArrowAlt color='#828282' />,
  toAddress: `0x${Math.floor(Math.random() * 10000000)}`,
  inPrice: `$${Math.floor(Math.random() * 100)}`,
  holdTime: `${Math.floor(Math.random() * 90)}\n minutes`,
}))
