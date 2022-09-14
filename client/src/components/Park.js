import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';

const Park = (props) => {
    const id = props.match.params.id
    const park = props.parks.find(c => c.id === id)

    return (
        <Container maxWidth="sm" className="park-container">
            <Paper className="park-paper">
                <h2>{park.name}</h2>
                {
                    Object.keys(park).map((key, idx) => {
                        return <Chip label={`${key}: ${park[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Park