import { memo, VFC } from 'react'
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom'
import { useLoginUser } from '../hooks/useLoginUser'

import { homeRoutes } from './HomeRoutes'
import { Login } from '../components/pages/Login'
import { Page404 } from '../components/pages/404'
import { HeaderLayout } from '../components/templates/HeaderLayout'
import { LoginUserProvider } from '../providers/LoginUserProviders'

// PrivateRouteの実装
const PrivateRoute: React.FC<RouteProps> = ({ ...props }) => {
  const { loginUser } = useLoginUser()
  const isAuthenticated = loginUser !== null //認証されているかの判定
  if (isAuthenticated) {
    return <Route {...props} />
  } else {
    return <Redirect to='/' />
  }
}

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
                <PrivateRoute
                  path={`${url}${route.path}`}
                  key={route.path}
                  exact={route.exact}>
                  <HeaderLayout>{route.children}</HeaderLayout>
                </PrivateRoute>
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
