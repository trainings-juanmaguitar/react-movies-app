import React, { Component } from 'react';
import { Grid, Thumbnail } from 'react-bootstrap'

import { getMoviesBySection } from '../services/moviesApi'
import { capitalize } from '../utils'

import './ListMovies.css'

class ListMovies extends Component {
  constructor() {
    super()
    this.state = {
      section: '',
      movies: []
    }
  }

  componentWillReceiveProps( nextProps ) {
    const nextSection = nextProps.match.params[0]
    if (this.state.section !== nextSection) {
      getMoviesBySection(nextSection)
        .then(movies => {
          this.setState({ 
            movies, 
            section: nextSection
          })
        })
    }
  }

  componentDidMount( ) {
    const section = this.props.match.params[0]
    getMoviesBySection(section)
      .then(movies => {
        this.setState({ movies, section })
      })
  }

  render() {
    const sectionTitle = capitalize(this.state.section.split('_').join(' '))
    return (
      <Grid>
        <h1>{ sectionTitle } Movies </h1>
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


export default ListMovies;
