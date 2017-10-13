import React from 'react';
import { Grid } from 'react-bootstrap'

import SearchForm from './SearchForm';
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <Grid>
        <SearchForm />
      </Grid>    
    </div>
  );
}

export default Home;