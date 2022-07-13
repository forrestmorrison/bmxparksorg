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
        confirmpassword: ''
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
        console.log("Add User", payload)
        this.props.addUser(payload);
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
                <div class='but' style={{ textAlign: 'center' }}>
                    <Button
                        variant="text"
                        className="add-user"
                        style={{ color: '#0000FF' }}
                        onClick={this.toggleDialog}
                    >
                        add user
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>new user</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="username" 
                                    placeholder="username" 
                                    value={this.state.username} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="email" 
                                    placeholder="email" 
                                    value={this.state.email} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="password" 
                                    placeholder="password" 
                                    value={this.state.password} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="confirm-password" 
                                    placeholder="confirm password" 
                                    value={this.state.confirmpassword} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" style={{ backgroundColor: '#800080', color: '#FFFFFF' }} type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddUser;