import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './containers/pages/login'
import Register from './containers/pages/register'

export default class router extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={Login} />
                 </Switch>
        )
    }
}


