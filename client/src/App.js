import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import LogIn from './components/LogIn';
import logo from './images/bmxlogo.jpg';
import MUICreateUser from './components/MUICreateUser';
import MUIAddPark from './components/MUIAddPark';
import MUILogIn from './components/MUILogIn';


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
  //     
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
        
        <div className='header1'>
          <div className='subheader'>
            <img src={logo} id="bmxlogo" />
            <Header />
          </div>
        </div>
        <div id="map"></div>
        <MUICreateUser />
        <MUILogIn />
        <MUIAddPark />
      </div>
    );
  }
  
}

export default App;
