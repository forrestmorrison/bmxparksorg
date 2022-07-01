import React, { Component, Fragment } from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core';


class LogIn extends Component {

    state = {
            open: false,
            username: "",
            password: ""
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleChangeUsername = (event) => {
        const username = event.target.value;
        this.setState({ username });
    }

    handleChangePassword = (event) => {
        const password = event.target.value;
        this.setState({ password });
    }

    logInSubmit = () => {
        fetch('http://localhost:4004/signup', {
            method: 'post',
            body: {
             "username": this.state.username,
             "password": this.state.password
            }
           });
    }

    render() {
        return (
            <Fragment>
                <div className='but' style={{ textAlign: 'center' }}>
                    <Button
                        variant="text"
                        className="add-park"
                        style={{ color: '#0000FF' }}
                        onClick={this.toggleDialog}
                    >
                        log in
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>log in</DialogTitle>
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
                                    id="password" 
                                    placeholder="password" 
                                    value={this.state.password} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" style={{ backgroundColor: '#800080', color: '#FFFFFF' }} type="submit" onClick={this.logInSubmit}>Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default LogIn;