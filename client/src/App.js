import "./App.css";
import React, { Component } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./components/Map"


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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loaded !== this.state.loaded) {
      
    }
  }
  
  

  render() {
    return (
      <div className="App">
        <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
          <Map/>
        </Wrapper>
      </div>
    );
  }
  
}

export default App;
