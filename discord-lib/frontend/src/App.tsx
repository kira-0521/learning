import {
  Link as ReactLink,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { List, ListItem } from '@chakra-ui/react'

import './App.css'
import { WalletAlert } from './components/pages/WalletAlert'
import { WatchList } from './components/pages/WatchList'
import { WalletList } from './components/pages/WalletList'

function App() {
  return (
    <>
      <BrowserRouter>
        <List>
          {['/', 'wallet_alert', 'watch_list'].map((route: string) => (
            <ListItem key={route}>
              <ReactLink to={route}>{route === '/' ? 'List' : route}</ReactLink>
            </ListItem>
          ))}
        </List>
        <Routes>
          <Route path='/' element={<WalletList />} />
          <Route path='wallet_alert' element={<WalletAlert />} />
          <Route path='watch_list' element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
