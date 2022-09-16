import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import AddPark from '../containers/AddPark'

const Navigation = () => {
    return (
        <AppBar position="relative" style={{ background: "#FFFFFF" }}>
            <Toolbar style={{ color: '#FFFFFF'}}>
                <Typography variant="h5" style={{ flexGrow: "1", color: '#800080' }}>
                    bmxparks.org
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/logout">LOG OUT</Link>
                    </li>                
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation