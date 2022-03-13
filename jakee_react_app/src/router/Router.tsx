import { memo, VFC } from 'react'
import { Route, Switch } from 'react-router-dom'

import { homeRoutes } from './HomeRoutes'
import { Login } from '../components/pages/Login'
import { Page404 } from '../components/pages/404'
import { HeaderLayout } from '../components/templates/HeaderLayout'
import { LoginUserProvider } from '../providers/LoginUserProviders'

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
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
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      <Route path='*'>
        <Page404 />
      </Route>
    </Switch>
  )
})
