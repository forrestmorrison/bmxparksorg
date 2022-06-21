import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import LogIn from './components/LogIn';
import logo from './images/bmxlogo.jpg';
import MUICreateUser from './components/MUICreateUser';
import MUIAddPark from './components/MUIAddPark';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapComponent from './components/MapComponent'


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
        <Wrapper apiKey={"API_KEY"} render={render}>
          <MapComponent/>
        </Wrapper>
        <MUICreateUser />
        <MUIAddPark />
      </div>
    );
  }
  
}

export default App;
