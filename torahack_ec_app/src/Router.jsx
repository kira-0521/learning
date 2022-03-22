import React from 'react'
import { Route, Switch } from 'react-router'
import { Login, Home } from './templates'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='(/)?'>
        <Home />
      </Route>
    </Switch>
  )
}

export default Router
