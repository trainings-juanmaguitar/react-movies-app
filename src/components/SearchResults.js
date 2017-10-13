import React, { Component } from 'react';
import { Grid, Thumbnail } from 'react-bootstrap'
import { findMovies } from '../services/moviesApi'

import './SearchResults.css'

class SearchResults extends Component {

  constructor() {
    super()
    this.state = {
      movies: [],
      query: ''
    }
  }
  componentWillReceiveProps( nextProps ) {
    const { query: nextQuery } = nextProps.match.params
    if (this.state.query !== nextQuery) {
      findMovies(nextQuery)
        .then(movies => {
          this.setState({ 
            movies, 
            query: nextQuery
          })
        })
    }
  }

  componentDidMount( ) {
    const { query } = this.props.match.params
    findMovies(query)
      .then(movies => {
        this.setState({ movies, query })
      })
  }

  render() {
    const { movies, query } = this.state
    console.log(movies);
    return (
      <Grid className="SearchResults">
        <h1>Search Results for <strong>{ query }</strong></h1>
        <div className="list-movies">
        {
          this.state.movies.map(movie => (
            <Thumbnail key={ movie.id } src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={ movie.title }>
              <h3>{ movie.title }</h3>
              <p>{ movie.overview.substring(0,100) + '...' }</p>
            </Thumbnail>
          ))
        }
        </div>
      </Grid>
    )
  }
}

export default SearchResults