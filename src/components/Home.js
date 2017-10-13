import React from 'react';
import { Grid } from 'react-bootstrap'

import SearchForm from './SearchForm';
import logoSrc from '../img/logo-movie-finder-white.png'

import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <div className="curtain"></div>
      <div className="cover">
        <Grid>
          <div className="search-box">
            <img src={ logoSrc } alt='logo app' />
            <h3>Look for your favourites movies with our app</h3>
            <SearchForm size="lg"/>
          </div>
        </Grid>    
      </div>
    </div>
  );
}

export default Home;