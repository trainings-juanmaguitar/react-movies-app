import React from 'react';
import { Route, Switch } from 'react-router-dom'

import MoviesSection from './MoviesSection'
import Home from './Home'
import SearchResults from './SearchResults'

const Main = () => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/search/:query' component={ SearchResults } />
    <Route path='/(popular|upcoming|now_playing|top_rated)' component={ MoviesSection } />
  </Switch>
)

export default Main;
