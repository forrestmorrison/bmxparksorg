import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import AddPark from '../containers/AddPark'

const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    bmxparks.org
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <AddPark />
                    </li>
                    <li className="nav-list-item">
                        <Link to="/logout">log out</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation