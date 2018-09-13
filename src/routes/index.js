import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/Profile'
import Relay from 'react-relay'

const ViewerQuieries = {
  viewer: () => Relay.QL`query {viewer}` 
}

const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
      // to allow the route to query the graph db
      queries={ViewerQuieries}
    >
      <IndexRoute
        component={TicTacToe}
        queries={ViewerQuieries}
      />
      <Route
        path={'/profile'}
        component={Profile}
        queries={ViewerQuieries}
      />
    </Route>
  )
}

const Routes = createRoutes()

export default Routes