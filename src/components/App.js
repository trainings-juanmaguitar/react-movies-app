import React, { Component } from 'react';

import Navbar from './Navbar'
import Main from './Main'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Main />
      </div>
    );
  }
}

export default App;
