import React, { Component } from 'react';
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
    page = page ? +page : 1
    findMovies(query, page)
      .then(response => {
        const { results: movies, total_results: totalResults, total_pages: totalPages } = response
        console.log({ movies, query, page, totalResults, totalPages });
        this.setState({ movies, query, page, totalResults, totalPages })
      } , this.props.addSearch(query) )
  }

  handleSelectPage(page) {
    const urlToRedirect = `/search/${this.state.query}/page/${page}`
    this.props.history.push(urlToRedirect) 
    //this.getMovies(this.state.query, page)
  }

  componentWillReceiveProps( nextProps ) {
    let { query: nextQuery, pageNumber: nextPage } = nextProps.match.params
    const isDifferentQuery = this.state.query !== nextQuery
    const isDifferentPage = this.state.page !== nextPage
    if (isDifferentQuery || isDifferentPage ) {
      this.getMovies(nextQuery, nextPage )
    }
  }

  componentDidMount() {
    const { query, pageNumber } = this.props.match.params
    this.getMovies(query, pageNumber)
  }

  render() {
    const { movies, query, page, totalResults, totalPages } = this.state
    return (
      <Grid className="SearchResults">
        <h1>Found { totalResults } movies for: <strong>"{ query }"</strong></h1>
        <h4>Showing results from { page*20-20+1 } to { page === totalPages ? totalResults : page*20 }</h4>
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


export default SearchResults