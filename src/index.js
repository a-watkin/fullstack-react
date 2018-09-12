import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import Routes from './routes'

import Relay from 'react-relay'
import userRelay from 'react-router-relay'

// for changing headers
import {RelayNetworklayer, urlMiddleware} from 'react-relay-networklayer'
import {relayApi} from './config/endpoints'


const creatHeaders = () => {

}

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={Routes}
  />,
  document.getElementById('root')
)