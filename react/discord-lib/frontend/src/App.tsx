import {
  Link as ReactLink,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { List, ListItem } from '@chakra-ui/react'
import _ from 'lodash'

import { MainLayout } from './components/templates/Layouts/MainLayout'
import { homeRoutes, RouteType } from './routes/homeRoutes'
import { WalletDetail } from './components/pages/WalletDetail'
import { NotFound } from './components/pages/NotFound'
import { WalletList } from './components/pages/WalletList'
import { WatchList } from './components/pages/WatchList'
import { WalletAlert } from './components/pages/WalletAlert'
import { TableTest } from './components/pages/TableTest'

import { MoneyUnitProvider } from './provider/MoneyUnitProvider'
import { ToastProvider } from './provider/ToastProvider'

function App() {
  return (
    <BrowserRouter>
      <MoneyUnitProvider>
        <ToastProvider>
          <MainLayout>
            <List>
              {_.map(homeRoutes, (route: RouteType) => (
                <ListItem key={route.path}>
                  <ReactLink to={route.path}>{route.name}</ReactLink>
                </ListItem>
              ))}
            </List>
            <Routes>
              <Route path='/wallet_list' element={<WalletList />} />
              <Route
                path='/wallet_detail/:id'
                element={<WalletDetail />}></Route>
              <Route path='/wallet_alert' element={<WalletAlert />} />
              <Route path='/watch_list' element={<WatchList />} />
              <Route path='/test' element={<TableTest />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </MainLayout>
        </ToastProvider>
      </MoneyUnitProvider>
    </BrowserRouter>
  )
}

export default App
