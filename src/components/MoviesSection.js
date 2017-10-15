import React, { Component } from 'react';
import { Grid, Glyphicon } from 'react-bootstrap'

import { getMoviesBySection } from '../services/moviesApi'
import { capitalize } from '../utils'

import MoviesList from './MoviesList'

class MoviesSection extends Component {
  constructor() {
    super()
    this.state = {
      section: '',
      movies: []
    }
    this.icons = {
      'popular': 'flash',
      'upcoming': 'film',
      'now_playing': 'expand',
      'top_rated': 'thumbs-up'
    }
    this.getMovies = this.getMovies.bind(this)
  }

  getMovies(section) {
    getMoviesBySection(section)
      .then(movies => {
        this.setState({ movies, section })
      })
  }

  componentWillReceiveProps( nextProps ) {
    console.log('MoviesSection:componentWillReceiveProps...')
    const nextSection = nextProps.match.params[0]
    if (this.state.section !== nextSection) {
      this.getMovies(nextSection)
    }
  }

  componentDidMount() {
    console.log('MoviesSection:componentDidMount...')
    const section = this.props.match.params[0]
    this.getMovies(section)
  }

  render() {
    const { section, movies } = this.state
    console.log(section)
    console.log(this.icons[section] )
    const sectionTitle = capitalize(section.split('_').join(' '))
    return (
      <Grid className="MoviesSection">
        {
          section &&
          <h1><Glyphicon glyph={ this.icons[section] } /> { sectionTitle } Movies </h1>
        }
        <MoviesList movies={ movies } />
      </Grid>
    )
  }
}


export default MoviesSection;
