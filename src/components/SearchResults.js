import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Pagination } from 'react-bootstrap'
import { findMovies } from '../services/moviesApi'

import './SearchResults.css'

import MoviesList from './MoviesList'

class SearchResults extends Component {

  constructor() {
    super()
    this.state = {
      totalPages: 0,
      totalResults: 0,
      page: 1,
      movies: [],
      query: ''
    }
    this.getMovies = this.getMovies.bind(this)
    this.handleSelectPage = this.handleSelectPage.bind(this)
  }

  getMovies(query, page) {
    findMovies(query, page)
      .then(response => {
        console.log(response);
        const { results: movies, total_results: totalResults, total_pages: totalPages } = response
        console.log({ movies, query, page, totalResults, totalPages });
        this.setState({ movies, query, page, totalResults, totalPages })
      } , this.props.addSearch(query) )
  }

  handleSelectPage(page) {
    const urlToRedirect = `/search/${this.state.query}/page/${page}`
    this.props.history.push(urlToRedirect) 
    this.getMovies(this.state.query, page)
  }

  componentWillReceiveProps( nextProps ) {
    const { query: nextQuery, pageNumber } = nextProps.match.params
    if (this.state.query !== nextQuery) {
      this.getMovies(nextQuery, pageNumber)
    }
  }

  componentDidMount() {
    console.log(this.props.match.params);
    const { query, pageNumber } = this.props.match.params
    this.getMovies(query, pageNumber)
  }

  render() {
    const { movies, query, page, totalPages } = this.state
    return (
      <Grid className="SearchResults">
        <h1>Search Results for <strong>{ query }</strong></h1>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={ totalPages }
          maxButtons={5}
          activePage={ page }
          onSelect={ this.handleSelectPage } 
        />
        <MoviesList movies={ movies }/>
      </Grid>
    )
  }
}

SearchResults.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default SearchResults