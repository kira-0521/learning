import {
  Link as ReactLink,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { List, ListItem } from '@chakra-ui/react'
import _ from 'lodash'

import { MainLayout } from './components/templates/Layouts/MainLayout'
import { homeRoutes } from './routes/homeRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <List>
            {['/', 'wallet_alert', 'watch_list'].map((route: string) => (
              <ListItem key={route}>
                <ReactLink to={route}>
                  {route === '/' ? 'List' : route}
                </ReactLink>
              </ListItem>
            ))}
          </List>
          <Routes>
            {homeRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.name}
              />
            ))}
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  )
}

export default App
