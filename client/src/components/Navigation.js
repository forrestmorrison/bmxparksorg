import React from 'react'
import { AppBar, Toolbar, 
    Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import AddPark from '../containers/AddPark'

const Navigation = () => {
    return (
        <AppBar position="relative" style={{ background: "#FFFFFF" }}>
            <Toolbar style={{ color: '#FFFFFF'}}>
                <Typography variant="h5" style={{ flexGrow: "1", color: '#800080' }}>
                    bmxparks.org
                </Typography>
                <AddPark />
                <Link to="/logout">log out</Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation