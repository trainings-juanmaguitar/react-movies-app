import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import firebase from 'firebase'
import configFirebase from './config/firebase'

import './index.css'

import App from './components/App'

firebase.initializeApp(configFirebase)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
)
