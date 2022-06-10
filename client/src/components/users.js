import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';

const User = (props) => {
    const id = props.match.params.id
    const car = props.users.find(c => c.id === id)

    return (
        <Container maxWidth="sm" className="park-container">
            <Paper className="park-paper">
                <h2>{user.name}</h2>
                {
                    Object.keys(user).map((key, idx) => {
                        return <Chip label={`${key}: ${user[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default User