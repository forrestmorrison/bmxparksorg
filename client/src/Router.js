import React from 'react'
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Home from './components/Home';
import LogIn from './components/LogIn';
import Dashboard from './containers/Dashboard'
import Park from './containers/Park'

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/park/:id" component={Park} />
            <Route path="/dashboard" component={Dashboard} />
        </Routes>
    );
};










export default Router;