import React from 'react';
import { Route, Switch } from 'react-router-dom'

import MoviesSection from './MoviesSection'
import Home from './Home'
import SearchResults from './SearchResults'

const Main = mainProps => {
  return (
    <Switch>
      <Route path='/search/:query' render={ routeProps => (
        <SearchResults addSearch={mainProps.addSearch} { ...routeProps } />
      )} />
      <Route path='/(popular|upcoming|now_playing|top_rated)' component={ MoviesSection } />
    </Switch>
  )
}

export default Main;
