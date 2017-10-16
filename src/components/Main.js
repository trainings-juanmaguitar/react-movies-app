import React from 'react';
import { Route, Switch } from 'react-router-dom'

import MoviesSection from './MoviesSection'
import SearchResults from './SearchResults'
import Profile from './Profile'

import './Main.css'

const Main = mainProps => {
  console.log(mainProps);
  return (
    <div className="Main">
      <Switch>
        <Route exact path='/profile' component={ routeProps => (
          <Profile user={ mainProps.user } { ...routeProps } />
        ) } />
        <Route exact path='/search/:query' render={ routeProps => (
          <SearchResults addSearch={ mainProps.addSearch } { ...routeProps } />
        )} />
        <Route exact path='/search/:query/page/:pageNumber' render={ routeProps => (
          <SearchResults addSearch={ mainProps.addSearch } { ...routeProps } />
        )} />
        <Route exact path='/(popular|upcoming|now_playing|top_rated)' component={ MoviesSection } />
        <Route path='/(popular|upcoming|now_playing|top_rated)/page/:pageNumber' component={ MoviesSection } />
      </Switch>
    </div>
  )
}

export default Main;
