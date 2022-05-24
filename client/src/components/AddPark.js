import React, { Component } from 'react';

class AddPark extends Component {

    state = {
            username: "",
            password: ""
    }

    handleChangeUsername = (event) => {
        const parkName = event.target.value;
        this.setState({ parkName });
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
        return(
            <div id="login-screen">
                <label>username
                <input id="username-input" onChange={this.handleChangeUsername}></input>
                </label>
                <label>password
                <input id="password-input" onChange={this.handleChangePassword}></input>
                </label>
                <button onClick={this.logInSubmit}>submit</button>
            </div>
        )
    }
}

export default LogIn;