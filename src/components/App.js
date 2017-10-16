import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import firebase from 'firebase'

import { cleanFirebaseUserObject } from '../utils'

import Navbar from './Navbar'
import Main from './Main'
import Home from './Home'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.searches = ['indiana', 'future']
    this.state = {
      user: null
    }
    this.addSearch = this.addSearch.bind(this)
    this.handleOnAuth = this.handleOnAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  addSearch(query) {
    this.searches = Array.from( new Set([...this.searches, query ]) )
    if (this.searches.length > 10) this.searches.shift()
  }

  handleOnAuth () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error -> ${error.code} : ${error.message}`))
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(() => console.log('Te has desconectado correctamente'))
      .catch(() => console.error('Un error ocurrió'))
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(loggedUser => {

      // cleaner version of the user object to not add useless props to the state
      const user = cleanFirebaseUserObject({...loggedUser})
      
      if (user && Object.keys(user).length ) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={ () => <Home searches={ this.searches }/> } />
          <Route render={ () => (
            <div>
              <Navbar 
                onLogout={this.handleLogout} 
                onAuth={this.handleOnAuth} 
                user={ this.state.user } 
              />
              <Main addSearch={ this.addSearch }/>
            </div>
          ) }></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
