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

    handleChangeParkHours = (event) => {
        const parkHours = event.target.value;
        this.setState({ parkHours });
    }

    handleChangeParkType = (event) => {
        const parkType = event.target.value;
        this.setState({ parkType });
    }

    addParkSubmit = () => {
        fetch('http://localhost:4004/signup', {
            method: 'post',
            body: {
             "park name": this.state.parkname,
             "park address": this.state.parkaddress,
             "park hours": this.state.parkhours,
             "park type": this.state.parktype
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
                <label>park hours
                <input id="park-hours-input" onChange={this.handleChangeParkHours}></input>
                </label>
                <label>park type
                <input id="park-type-input" onChange={this.handleChangeParkType}></input>
                </label>
                <button onClick={this.addParkSubmit}>add park</button>
            </div>
        )
    }
}

export default AddPark;