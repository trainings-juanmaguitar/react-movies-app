import React from 'react';
import { Thumbnail } from 'react-bootstrap'

import './MoviesList.css'

const srcImgError = "http://www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png"

const MoviesList = props => {
  return (
    <div className="MoviesList">
        {
          props.movies.map(movie => {
            const { id, title, poster_path, overview, release_date } = movie
            const yearRelease = release_date.replace(/([0-9]{4})-.*/, "$1");
            const shortDescription = overview.substring(0,100) + '...'
            const urlImage = `https://image.tmdb.org/t/p/w500${poster_path}`
            return (
              <Thumbnail 
                key={ id } 
                src={ urlImage } 
                alt={ title }
                className="MoviesList__thumbnail"
                onError={ e => { e.target.src = srcImgError } }
              >
                <h3>{ title } <small>{ yearRelease }</small></h3>
                <p>{ shortDescription }</p>
              </Thumbnail>
            )
          })
        }
    </div>
  );
}

export default MoviesList;