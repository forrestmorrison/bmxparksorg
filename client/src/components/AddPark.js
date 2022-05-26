import React, { Component } from 'react';

class AddPark extends Component {

    state = {
            username: "",
            password: ""
    }

    handleChangeParkName = (event) => {
        const parkName = event.target.value;
        this.setState({ parkName });
    }

    handleChangeParkAddress = (event) => {
        const parkAddress = event.target.value;
        this.setState({ parkAddress });
    }

    addParkSubmit = () => {
        fetch('http://localhost:4004/signup', {
            method: 'post',
            body: {
             "park name": this.state.parkname,
             "park address": this.state.parkaddress
            }
           });
 
    }

    render() {
        return(
            <div id="login-screen">
                <label>park name
                <input id="park-name-input" onChange={this.handleChangeParkName}></input>
                </label>
                <label>park address
                <input id="park-address-input" onChange={this.handleChangeParkAddress}></input>
                </label>
                <button onClick={this.addParkSubmit}>submit</button>
            </div>
        )
    }
}

export default AddPark;