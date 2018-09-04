import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'


const createRoutes = () => {
    return (
        // routes have paths and components
        <Route
            // root url
            path='/'
            component={Template}

        />
    )
}

const Routes = createRoutes()

export default Routes