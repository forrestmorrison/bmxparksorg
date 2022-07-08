import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'


function App () {

  return (
    <Provider store={store}>
      <BrowserRouter>

      </BrowserRouter>
    </Provider>
  );

}

export default App;
