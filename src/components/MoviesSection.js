import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'

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
    this.getMovies = this.getMovies.bind(this)
  }

  getMovies(section) {
    getMoviesBySection(section)
      .then(movies => {
        this.setState({ movies, section })
      })
  }

  componentWillReceiveProps( nextProps ) {
    const nextSection = nextProps.match.params[0]
    if (this.state.section !== nextSection) {
      this.getMovies(nextSection)
    }
  }

  componentDidMount() {
    const section = this.props.match.params[0]
    this.getMovies(section)
  }

  render() {
    const { section, movies } = this.state
    const sectionTitle = capitalize(section.split('_').join(' '))
    return (
      <Grid className="MoviesSection">
        <h1>{ sectionTitle } Movies </h1>
        <MoviesList movies={ movies } />
      </Grid>
    )
  }
}


export default MoviesSection;
