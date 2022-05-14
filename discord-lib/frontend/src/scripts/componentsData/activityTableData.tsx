import { map } from 'lodash'
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Column } from '../../@types/table'

export const ACTIVITY_COLUMNS: Column[] = [
  {
    data: 'Type',
    id: 'type',
    minWidth: '150px',
  },
  {
    data: 'Token ID',
    id: 'tokenId',
    minWidth: '120px',
  },
  {
    data: 'From Address',
    id: 'fromAddress',
    minWidth: '130px',
  },
  {
    data: '',
    id: 'arrow',
    minWidth: '65px',
  },
  {
    data: 'To Address',
    id: 'toAddress',
    minWidth: '130px',
  },
  {
    data: 'In Price',
    id: 'inPrice',
    minWidth: '90px',
  },
  {
    data: 'Hold Time',
    id: 'holdTime',
    minWidth: '90px',
  },
]

export const ACTIVITY_DATA = map(Array(200).fill(null), (_, i) => ({
  id: i,
  type: ['Buy', 'Sell', 'Mint', 'Transfer_In', 'Transfer_Out'][
    Math.floor(Math.random() * 5)
  ],
  tokenId: `#${Math.floor(Math.random() * 1000)}`,
  fromAddress: `0x${Math.floor(Math.random() * 10000)}`,
  arrow: <BiRightArrowAlt color='#828282' />,
  toAddress: `0x${Math.floor(Math.random() * 10000)}`,
  inPrice: `$${Math.floor(Math.random() * 100)}`,
  holdTime: `${Math.floor(Math.random() * 90)}\n minutes`,
}))
