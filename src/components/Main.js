import React from 'react';
import { Route, Switch } from 'react-router-dom'

import ListMovies from './ListMovies'

const Main = () => (
  <Switch>
    <Route exact path='/' component={ ListMovies } />
    <Route path='/(popular|upcoming|now_playing|top_rated)' component={ ListMovies } />
  </Switch>
)

export default Main;
