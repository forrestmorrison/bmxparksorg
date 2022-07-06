import React from 'react'
import { Switch, Route } from 'react-router'
import Dashboard from './containers/Dashboard'
import Park from './containers/Park'

const Router = () => {
    return (
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/park/:id" component={Park} />
        </Switch>
    );
};










export default Router;