import React from 'react';
import { Grid } from 'react-bootstrap'

import SearchForm from './SearchForm';
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <div className="cover">
        <Grid>
          <div className="search-box">
            <h1>Look for your favourites movies with our app</h1>
            <SearchForm />
          </div>
        </Grid>    
      </div>
    </div>
  );
}

export default Home;