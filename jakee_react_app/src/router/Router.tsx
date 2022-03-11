import { memo, VFC } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Login } from '../components/pages/Login'
import { homeRoutes } from './HomeRoutes'
import { Page404 } from '../components/pages/404'

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route
        path='/home'
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                path={`${url}${route.path}`}
                key={route.path}
                exact={route.exact}>
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path='*'>
        <Page404 />
      </Route>
    </Switch>
  )
})
