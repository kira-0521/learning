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
    path: '/',
    element: <WalletList />,
    name: 'Wallet',
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
