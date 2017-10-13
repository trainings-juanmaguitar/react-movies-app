import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap'
import { findMovies } from '../services/moviesApi'

import SearchForm from './SearchForm'

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
      <div>
      <SearchForm />
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
      </div>
    )
  }
}

export default SearchResults