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
            <img src={ logoSrc }/>
            <h3>Look for your favourites movies with our app</h3>
            <SearchForm />
          </div>
        </Grid>    
      </div>
    </div>
  );
}

export default Home;