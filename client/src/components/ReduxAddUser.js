import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class AddUser extends Component {
    state = {
        open: false,
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
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
        payload.id = this.props.userTotal + 1
        delete payload.open
        console.log("THE USER", payload)
        // add this.props.addCar function here
        // also add this.setState to close the dialog
        this.props.addUser(payload)
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                username: '',
                email: '',
                password: '',
                confirmpassword: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <h1>Add User:</h1>
                    <Button
                        variant="contained"
                        className="add-user"
                        onClick={this.toggleDialog}
                    >
                        Add User
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New User</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="username" 
                                    placeholder="Username" 
                                    value={this.state.username} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="email" 
                                    placeholder="Email" 
                                    value={this.state.email} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="password" 
                                    placeholder="Password" 
                                    value={this.state.password} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="confirmpassword" 
                                    placeholder="Confirm Password" 
                                    value={this.state.confirmpassword} 
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

export default AddUser