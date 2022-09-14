import React from 'react'
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Dashboard from './containers/Dashboard'
import Park from './containers/Park'

const Router = () => {
    return (
        <Routes>
            <Route path="/park/:id" component={Park} />
            <Route path="/dashboard" component={Dashboard} />
        </Routes>
    );
};










export default Router;