import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './Navbar'
import Main from './Main'
import Home from './Home'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.searches = ['indiana', 'future']
    this.addSearch = this.addSearch.bind(this)
  }

  addSearch(query) {
    this.searches = Array.from( new Set([...this.searches, query ]) )
    if (this.searches.length > 10) this.searches.shift()
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={ () => <Home searches={ this.searches }/> } />
          <Route render={ () => (
            <div>
              <Navbar />
              <Main addSearch={ this.addSearch }/>
            </div>
          ) }></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
