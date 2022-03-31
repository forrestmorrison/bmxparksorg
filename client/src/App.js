import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  
  state = {}

  getBackendData = () => {
    fetch('http://localhost:4004/users')
      .then(response => console.log("Success!", response))
  }

  componentDidMount() {
    this.getBackendData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
  
}

export default App;
