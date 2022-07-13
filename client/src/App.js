import './App.css';
import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navigation from './components/Navigation';


function App () {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );

}

export default App;
