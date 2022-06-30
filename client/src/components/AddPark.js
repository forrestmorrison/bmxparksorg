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
        type: '',
        website: ''
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
        // add this.props.addCar function here
        this.props.addPark(payload);
        // also add this.setState to close the dialog
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                address: '',
                type: '',
                website: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className='but' style={{ textAlign: 'center' }}>
                    <Button
                        variant="text"
                        className="add-park"
                        onClick={this.toggleDialog}
                    >
                        add park
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>add new park</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="name" 
                                    placeholder="name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    placeholder="address" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="type" 
                                    placeholder="type" 
                                    value={this.state.type} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="website" 
                                    placeholder="website" 
                                    value={this.state.website} 
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

export default AddPark;