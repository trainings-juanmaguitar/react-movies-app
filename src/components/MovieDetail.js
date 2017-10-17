import React, { Component } from "react";
import { Grid } from 'react-bootstrap'

import { getMovieDetails, getUrlImage } from '../services/moviesApi'

import './MovieDetail.css'

class MovieDetail extends Component {
  constructor() {
    super()
    this.state = {
      movie: {}
    }
  }

  componentDidMount() {
    const { idMovie } = this.props.match.params
    getMovieDetails(idMovie)
      .then( movie => {
        this.setState({ movie })
      })
    
  }
  render() {
    const { backdrop_path, budget, genres, original_title, overview, poster_path, production_companies, production_countries, release_date, revenue, runtime, tagline, title, vote_average, vote_count } = this.state.movie
    const imgPath = getUrlImage(poster_path)
    return (
      <Grid className="MovieDetail">
        <div className="card">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img alt={ original_title } src={ imgPath } />
                </div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                <li className="active">
                  <a data-target="#pic-1" data-toggle="tab">
                    <img alt="aaa" src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-2" data-toggle="tab">
                    <img alt="aaa" src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-3" data-toggle="tab">
                    <img alt="aaa" src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-4" data-toggle="tab">
                    <img alt="aaa" src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-5" data-toggle="tab">
                    <img alt="aaa" src="http://placekitten.com/200/126" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{ title }</h3>
              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <span className="review-no">41 reviews</span>
              </div>
              <p className="product-description">
                { overview }
              </p>
              <h4 className="price">
                Budget: <span>{ budget }</span>
              </h4>
              <p className="vote">
                <strong>91%</strong> of buyers enjoyed this product!{" "}
                <strong>(87 votes)</strong>
              </p>
              <h5 className="sizes">
                sizes:
                <span className="size" data-toggle="tooltip" title="small">
                  s
                </span>
                <span className="size" data-toggle="tooltip" title="medium">
                  m
                </span>
                <span className="size" data-toggle="tooltip" title="large">
                  l
                </span>
                <span className="size" data-toggle="tooltip" title="xtra large">
                  xl
                </span>
              </h5>
              <h5 className="colors">
                colors:
                <span
                  className="color orange not-available"
                  data-toggle="tooltip"
                  title="Not In store"
                />
                <span className="color green" />
                <span className="color blue" />
              </h5>
              <div className="action">
                <button className="add-to-cart btn btn-default" type="button">
                  add to cart
                </button>
                <button className="like btn btn-default" type="button">
                  <span className="fa fa-heart" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    )
  }
}

export default MovieDetail;
