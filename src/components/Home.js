import React from 'react';
import { Grid } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import SearchForm from './SearchForm';
import logoSrc from '../img/logo-movie-finder-white.png'

import './Home.css'

const Home = props => {
  return (
    <div className="Home">
      <div className="Home__cover"></div>
      <div className="Home__curtain">
        <Grid className="Home__grid">
          <div className="Home__search-box">
            <img src={ logoSrc } className="img-responsive" alt='logo app' />
            <h3 className="Home__h3">Look for your favourites movies with our app</h3>
            <SearchForm addSearch={props.addSearch} />
            {
              !!props.searches.length && 
              <div className="Home__latest-searches lead">
                <p className="Home__latest-searches-p">10 Latest Searches:</p>
                <ul className="list-inline">
                  { props.searches.map( query => (
                    <li key={ query }>
                      <Link className="Home__latest-searches-link" to={`/search/${query}`}>{query}</Link>
                    </li>
                    )) 
                  }
                </ul>
              </div>
            }
            
            
            
          </div>
        </Grid>    
      </div>
    </div>
  );
}

export default Home;