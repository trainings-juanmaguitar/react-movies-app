import React, { Component } from "react";
import { Grid, Thumbnail } from 'react-bootstrap'
import Slider from 'react-slick'

import { getMovieDetails, getUrlImage } from '../services/moviesApi'
import { formatPrice, orderByCriteria } from '../utils'

import './MovieDetail.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const srcImgError = 'https://www.wallstreetotc.com/wp-content/uploads/2014/10/facebook-anonymous-app.jpg'

const settingsSlider = {
  dots: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5
};

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
    const { credits, backdrop_path, budget, genres, original_title, overview, poster_path, production_companies, production_countries, release_date, revenue, runtime, tagline, title, vote_average, vote_count } = this.state.movie
    const imgPath = getUrlImage(poster_path)
    const yearRelease = release_date && release_date.replace(/([0-9]{4})-.*/, "$1");
    console.log({ credits, backdrop_path, budget, genres, original_title, overview, poster_path, production_companies, production_countries, release_date, revenue, runtime, tagline, title, vote_average, vote_count });
    const jobOrderCriteria = ["Director", "Producer", "Story", "Screenplay", "Original Music Composer", "Director of Photography", "Art Direction"] 
    const orderedCrew = credits && orderByCriteria(credits.crew, "job", jobOrderCriteria)
    return (
      <div>
        <div  style={ { 
          backgroundImage: `url(${getUrlImage(backdrop_path)})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "1100px",
          width: "100%",
          filter: "blur(5px)",
          position: "absolute",
          zIndex: "-1"
        } }>
        </div>
        <Grid className="MovieDetail" >
          <div className="card">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img alt={ original_title } src={ imgPath } />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  {
                    production_companies && production_companies.map(getItemCompany)
                  }
                </ul>
              </div>
              <div className="details col-md-6">
                <h1 className="product-title">{ title } <small>{ yearRelease }</small></h1>
                <blockquote>{ tagline }</blockquote>
                <p className="product-description">
                  { overview }
                </p>
                <h4>Crew</h4>
                <div className="containerSlider">
                  <Slider {...settingsSlider} autofocus>
                  {
                    orderedCrew && orderedCrew.slice(0,20).map( ({ profile_path, name, credit_id, job }) => (
                      <div key={ credit_id } className="item-block-img">
                        <Thumbnail 
                          src={ getUrlImage(profile_path, 45) } 
                          alt={name}
                          onError={ e => { 
                            console.log("error loading image");
                            e.target.src = srcImgError 
                          } }
                        />
                        <strong>{ name }</strong>
                        <span>{ job }</span>
                      </div>
                    ))
                  }
                  </Slider> 
                </div>
                <h4>Cast</h4>
                <div className="containerSlider">
                  <Slider {...settingsSlider} autofocus>
                  {
                    credits && credits.cast.slice(0,20).map( ({ profile_path, name, id, character }) => (
                      <div key={ id } className="item-block-img">
                        <Thumbnail 
                          src={ getUrlImage(profile_path, 45) } 
                          alt={name}
                          onError={ e => { 
                            console.log("error loading image");
                            e.target.src = srcImgError 
                          } }
                        />
                        <strong>{ name }</strong>
                        <span>{ character }</span>
                      </div>
                    ))
                  }
                  </Slider> 
                </div>
                <h4 className="price">
                  Budget: <span>{ formatPrice(budget) }</span>
                </h4>
                <h4 className="price">
                  Revenue: <span>{ formatPrice(revenue) }</span>
                </h4>
                <h4 className="genres">
                  Genres: 
                  { genres && genres.map(({ name, id }) => (
                    <span key={id}>{ name }</span>
                  ))}
                </h4>
                <p className="vote">
                  <strong>{ vote_average }</strong> is the average rating for this movie!{" "}
                  <strong>({ vote_count } votes)</strong>
                </p>
                <div className="action">
                  {
                    this.props.user && <button className="add-to-favourites btn btn-default" type="button">
                      <span className="fa fa-heart" /> Add to favourites
                    </button>
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    )
  }
}


function getItemCompany ({ id, homepage, logo_path, name }) {
  if (homepage && logo_path) return (
    <li key={id}>
      <a href={ homepage } target="_blank">
        <img src={ getUrlImage(logo_path) } alt={name} />
      </a>
    </li>
  )
  if (logo_path) return (
    <li key={id}>
        <img src={ getUrlImage(logo_path) } alt={name} />
    </li>
  )

  return (
    <li key={id}>
      <a href={ homepage } target="_blank">
        <img src={ getUrlImage(logo_path) } alt={name} />
      </a>
    </li>
  )

}



export default MovieDetail;
