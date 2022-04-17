import { ReactNode } from 'react'

import { WalletList } from '../components/pages/WalletList'
import { WalletAlert } from '../components/pages/WalletAlert'
import { WatchList } from '../components/pages/WatchList'

export type RouteType = {
  path: string
  element: ReactNode
  name: string
}

export const homeRoutes: RouteType[] = [
  {
    path: '/wallet_list',
    element: <WalletList />,
    name: 'Wallet',
  },
  {
    path: '/wallet_detail/123',
    element: 'd',
    name: 'Wallet Detail',
  },
  {
    path: '/wallet_alert',
    element: <WalletAlert />,
    name: 'Wallet Alert',
  },
  {
    path: '/watch_list',
    element: <WatchList />,
    name: 'Watch List',
  },
]
