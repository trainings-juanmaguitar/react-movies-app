import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'

import Navbar from './Navbar'
import Main from './Main'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Grid>
          <Main />
        </Grid>
      </div>
    );
  }
}

export default App;
