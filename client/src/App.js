import './App.css';
import React, { Component } from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import logo from './images/bmxlogo.jpg';

class App extends Component {
  
  state = {
    // loaded: false
  }

  getBackendData = () => {
    fetch('http://localhost:4004/users')
      .then(response => console.log(response.json()))
      .then((data) => {
        console.log(data);
      })
  }

  componentDidMount() {
    this.getBackendData();
    // this.setState({loaded: true})
    this.initMap();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.loaded !== this.state.loaded) {
      
  //   }
  // }

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

  render() {
    return (
      <div className="App">
        <header>
          <div className='banner'>
            <img src={logo} alt="" id="bmxlogo" />
            <Banner />
          </div>
          <Nav />
        </header>
        <div id="map">
          
        </div>
      </div>
    );
  }
  
}

export default App;
