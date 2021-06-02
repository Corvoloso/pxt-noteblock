import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'

const Routes: React.FC = () => {
  const { user } = useAuth()

  return (
    <Switch>
      {Object.entries(user).length !== 0 ? (
        <Route path="/" exact component={Home} />
      ) : (
        <Route path="/" exact component={SignIn} />
      )}
    </Switch>
  )
}

export default Routes
