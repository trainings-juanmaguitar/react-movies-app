import React from 'react';
import { Thumbnail } from 'react-bootstrap'

import './MoviesList.css'

const srcImgError = "http://www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png"

const MoviesList = props => {
  return (
    <div className="MoviesList">
        {
          props.movies.map(movie => (
            <Thumbnail 
              key={ movie.id } 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={ movie.title }
              className="MoviesList__thumbnail"
              onError={ e => { e.target.src = srcImgError } }
            >
              <h3>{ movie.title }</h3>
              <p>{ movie.overview.substring(0,100) + '...' }</p>
            </Thumbnail>
          ))
        }
    </div>
  );
}

export default MoviesList;