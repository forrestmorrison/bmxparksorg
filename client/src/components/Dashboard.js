import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AddPark from '../containers/AddPark'
 
const Dashboard = (props) => {
    return (
        <Container maxWidth="lg" className="park-container">
            <h4>Welcome, {props.user.username}</h4>
            <div className="flex-container">
                <Chart />
                <Total />
                <AddPark parkTotal={props.parks.length} />
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>address</TableCell>
                        <TableCell>type</TableCell>
                        <TableCell>website</TableCell>
                        <TableCell>delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.parks.map((park, idx) => (
                    <TableRow key={park.id}>
                        <TableCell component="th" scope="row">
                            {park.id}
                        </TableCell>
                        <TableCell>{car["name"]}</TableCell>
                        <TableCell>{car["address"]}</TableCell>
                        <TableCell>{car["type"]}</TableCell>
                        <TableCell>{car["website"]}</TableCell>
                        <TableCell>
                            <DeleteIcon onClick={() => props.removePark(idx)}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard