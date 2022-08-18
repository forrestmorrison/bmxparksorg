import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    bmxparks.org
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/login">log in</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/createuser">create user</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation