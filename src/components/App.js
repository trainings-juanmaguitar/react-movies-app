import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './Navbar'
import Main from './Main'
import Home from './Home'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route render={ () => (
            <div>
              <Navbar></Navbar>
              <Main />
            </div>
          ) }></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
