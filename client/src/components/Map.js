import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper } from '@react-google-maps/api';

class Map extends Component {

    componentDidMount() {
        this.getBackendData();
        // this.setState({loaded: true})
        this.initMap();
      }

    initMap = () => {
        const rockstarpark = { lat: 29.95862, lng: -95.42057};
        let map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 39, lng: -96 },
        zoom: 5,
        });
        const marker = new window.google.maps.Marker({
        position: rockstarpark,
        map: map,
        });
    }

}




export default Map;