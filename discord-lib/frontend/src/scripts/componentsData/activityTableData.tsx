import { map } from 'lodash'
import { BiRightArrowAlt } from 'react-icons/bi'

export const ACTIVITY_COLUMNS = [
  {
    data: 'Type',
    id: 'type',
    minWidth: '250px',
  },
  {
    data: 'Token ID',
    id: 'tokenId',
    minWidth: '200px',
  },
  {
    data: 'From Address',
    id: 'fromAddress',
    minWidth: '220px',
  },
  {
    data: '',
    id: 'arrow',
    minWidth: '100px',
  },
  {
    data: 'To Address',
    id: 'toAddress',
    minWidth: '220px',
  },
  {
    data: 'In Price',
    id: 'inPrice',
    minWidth: '150px',
  },
  {
    data: 'Hold Time',
    id: 'holdTime',
    minWidth: '150px',
  },
]

const activityListData = map(Array(200).fill(null), (_, i) => ({
  id: i,
  type: ['Buy', 'Sell', 'Mint', 'Transfer_In', 'Transfer_Out'][
    Math.floor(Math.random() * 5)
  ],
  tokenId: `#${Math.floor(Math.random() * 1000)}`,
  fromAddress: `0x${Math.floor(Math.random() * 10000)}`,
  arrow: <BiRightArrowAlt />,
  toAddress: `0x${Math.floor(Math.random() * 10000)}`,
  inPrice: `$${Math.floor(Math.random() * 100)}`,
  holdTime: `${Math.floor(Math.random() * 90)}\n minutes`,
}))
