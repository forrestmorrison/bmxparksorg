import React, { Component } from 'react';

class CreateUser extends Component {

    state = {
            username: "",
            password: ""
    }

    handleChangeUserName = (event) => {
        const userName = event.target.value;
        this.setState({ userName });
    }

    handleChangeUserEmail = (event) => {
        const userEmail = event.target.value;
        this.setState({ userEmail });
    }

    handleChangeConfirmEmail = (event) => {
        const confirmEmail = event.target.value;
        this.setState({ confirmEmail });
    }

    handleChangeUserPassword = (event) => {
        const userPassword = event.target.value;
        this.setState({ userPassword });
    }

    handleChangeConfirmPassword = (event) => {
        const confirmPassword = event.target.value;
        this.setState({ confirmPassword });
    }

    createAccountSubmit = () => {
        fetch('http://localhost:4004/createaccount', {
            method: 'post',
            body: {
             "user name": this.state.username,
             "user email": this.state.useremail,
             "confirm email": this.state.confirmemail,
             "user password": this.state.userpassword,
             "confirm password": this.state.confirmpassword
            }
           });
 
    }

    render() {
        return(
            <div id="create-user-screen">
                <label>name
                <input id="user-name-input" onChange={this.handleChangeUserName}></input>
                </label>
                <label>email
                <input id="user-email-input" onChange={this.handleChangeUserEmail}></input>
                </label>
                <label>confirm email
                <input id="confirm-email-input" onChange={this.handleChangeConfirmEmail}></input>
                </label>
                <label>password
                <input id="user-password-input" onChange={this.handleChangeUserPassword}></input>
                </label>
                <label>password
                <input id="confirm-password-input" onChange={this.handleChangeConfirmPassword}></input>
                </label>
                <button onClick={this.addParkSubmit}>add park</button>
            </div>
        )
    }
}

export default CreateUser;