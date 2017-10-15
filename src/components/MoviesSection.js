import React, { Component } from 'react';
import { Grid, Glyphicon } from 'react-bootstrap'

import { getMoviesBySection } from '../services/moviesApi'
import { capitalize } from '../utils'
import { iconsSections } from '../config'

import MoviesList from './MoviesList'
import Pagination from './Pagination'

class MoviesSection extends Component {
  constructor() {
    super()
    this.state = {
      totalPages: 0,
      totalResults: 0,
      page: 1,
      section: '',
      movies: []
    }
    this.getMovies = this.getMovies.bind(this)
    this.handleSelectPage = this.handleSelectPage.bind(this)
  }

  getMovies(section, page) {
    page = page ? +page : 1
    getMoviesBySection(section, page)
      .then(response => {
        const { results: movies, total_results: totalResults, total_pages: totalPages } = response
        this.setState({ movies, section, page, totalResults, totalPages })
      })
  }

  handleSelectPage(page) {
    const urlToRedirect = `/${this.state.section}/page/${page}`
    this.props.history.push(urlToRedirect) 
    //this.getMovies(this.state.query, page)
  }

  componentWillReceiveProps( nextProps ) {
    let { 0: nextSection, pageNumber: nextPage } = nextProps.match.params
    const isDifferentSection = this.state.section !== nextSection
    const isDifferentPage = this.state.page !== nextPage
    if (isDifferentSection || isDifferentPage ) {
      this.getMovies(nextSection, nextPage )
    }
  }

  componentDidMount() {
    console.log(this.props)
    const { 0: section, pageNumber } = this.props.match.params
    this.getMovies(section, pageNumber)
  }

  render() {
    const { movies, section, page, totalResults, totalPages } = this.state
    const sectionTitle = capitalize(section.split('_').join(' '))
    return (
      <Grid className="MoviesSection">
        {
          section &&
          <h1><Glyphicon glyph={ iconsSections[section] } /> { sectionTitle } Movies </h1>
        }
        <Pagination 
          totalPages={totalPages}
          totalResults={totalResults}
          page={page}
          handleSelectPage={ this.handleSelectPage } 
        />
        <MoviesList movies={ movies } />
      </Grid>
    )
  }
}


export default MoviesSection;
