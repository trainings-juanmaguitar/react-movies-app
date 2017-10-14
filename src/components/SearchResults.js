import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'
import { findMovies } from '../services/moviesApi'

import './SearchResults.css'

import MoviesList from './MoviesList'

class SearchResults extends Component {

  constructor() {
    super()
    this.state = {
      movies: [],
      query: ''
    }
    this.getMovies = this.getMovies.bind(this)
  }

  getMovies(query) {
    findMovies(query)
      .then(movies => {
        this.setState({ movies, query })
      } , this.props.addSearch(query) )
  }

  componentWillReceiveProps( nextProps ) {
    const { query: nextQuery } = nextProps.match.params
    if (this.state.query !== nextQuery) {
      this.getMovies(nextQuery)
    }
  }

  componentDidMount( ) {
    const { query } = this.props.match.params
    this.getMovies(query)
  }

  render() {
    const { movies, query } = this.state
    return (
      <Grid className="SearchResults">
        <h1>Search Results for <strong>{ query }</strong></h1>
        <MoviesList movies={ movies }/>
      </Grid>
    )
  }
}

export default SearchResults