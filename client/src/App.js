import './App.css';
import React, { Component } from 'react';



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

          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
