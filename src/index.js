import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory, applyRouterMiddleware} from 'react-router'
import Routes from './routes'

import Relay from 'react-relay'
import userRelay from 'react-router-relay'

// for changing headers
import {
  RelayNetworkLayer,
  urlMiddleware,
} from 'react-relay-network-layer';

import {relayApi} from './config/endpoints'


import auth from './utils/auth'


const createHeaders = () => {
  let idToken = auth.getToken()
  if (idToken) {
    Authorization: `Bearer ${idToken}`
  } else {
    return {}
  }
}

Relay.injectNetworkLayer [
  new RelayNetworkLayer([
    urlMiddleware(
      {url: (req) => relayApi,}
    ),
    next => req => {
      req.headers = {
        // all the original headers, then any new ones
        ...req.headers,
        ...createHeaders()
      }
      return next(req)
    },
  ],{disableBatchQuery: true})
]

ReactDOM.render(
  <Router
    environment={Relay.Store}
    render={applyRouterMiddleware(userRelay)}
    history={browserHistory}
    routes={Routes}
  />,
  document.getElementById('root')
)