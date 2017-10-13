import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import ListMovies from './ListMovies'
import Home from './Home'
import SearchResults from './SearchResults'

const Main = () => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Grid>
      <Route path='/search/:query' component={ SearchResults } />
      <Route path='/(popular|upcoming|now_playing|top_rated)' component={ ListMovies } />
    </Grid>    
  </Switch>
)

export default Main;
