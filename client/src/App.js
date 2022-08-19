import './App.css';
import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navigation from './components/Navigation';
import Map from './components/Map';


function App () {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Provider>
  );

}

export default App;
