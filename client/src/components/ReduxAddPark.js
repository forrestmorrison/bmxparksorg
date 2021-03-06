import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class AddPark extends Component {
    state = {
        open: false,
        name: '',
        address: '',
        website: '',
        type: '',
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.parkTotal + 1
        delete payload.open
        console.log("THE PARK", payload)
        this.props.addPark(payload)
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                address: '',
                website: '',
                type: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <h1>Add Park:</h1>
                    <Button
                        variant="contained"
                        className="add-park"
                        onClick={this.toggleDialog}
                    >
                        Add Park
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Park</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="name" 
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    placeholder="Address" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="website" 
                                    placeholder="Website" 
                                    value={this.state.website} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="type" 
                                    placeholder="Type" 
                                    value={this.state.type} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddPark