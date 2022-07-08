import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className="card-container">
            {props.parks.map((park, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{park.name.toUpperCase()}</span>
                        <ul>
                        <li>address: {park["address"]}</li>
                        <li>website: {park["website"]}</li>
                        <li>type: {park["type"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'purple' }}>
                        <Link to={`/park/${park.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home