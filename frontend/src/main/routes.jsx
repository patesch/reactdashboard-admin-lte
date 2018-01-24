import React from 'react'
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
// import App from './app'
import Dashboard from '../dashboard2/dashboard2'
import BillingCycles from '../billingCycle/billingCycle'

const routes = props => (
    <Router history={hashHistory} >
        <Route path="/" component={AuthOrApp}>}>
            <IndexRoute component={Dashboard} />
            <Route path="billingCycles" component={BillingCycles} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
)

export default routes
