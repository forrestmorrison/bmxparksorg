import "./App.css";
import React, { Component } from "react";


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
        <script
          src="https://maps.googleapis.com/maps/api/js?key=process.env.API_KEY&callback=initMap"
          defer
        ></script>

      </div>
    );
  }
  
}

export default App;
