import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './Navbar'
import Main from './Main'
import Home from './Home'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searches: ['indiana', 'future']
    }
    this.addSearch = this.addSearch.bind(this)
  }

  addSearch(query) {
    this.setState({
      searches: [ ...this.state.searches, query ]
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.searches.length !== nextState.searches.length) {
      return false
    }
    return true;
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={ () => <Home searches={ this.state.searches }/> } />
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
