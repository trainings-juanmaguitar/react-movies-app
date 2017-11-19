import { getAndCache } from '../utils'

const apiKey = 'ba09f3c8c6c830377b422df18cfa833e'
const apiUrlBase = 'https://api.themoviedb.org/3'

const getUrlBySection = (section, page) => 
  `${apiUrlBase}/movie/${section}?page=${page}&api_key=${apiKey}`

const getUrlSearch = (query, page) => 
  `${apiUrlBase}/search/movie?query=${query}&page=${page}&api_key=${apiKey}`

const getUrlDetailsMovie = idMovie => 
  `${apiUrlBase}/movie/${idMovie}?api_key=${apiKey}`

const getUrlDetailsCompany = idCompany => 
  `${apiUrlBase}/company/${idCompany}?api_key=${apiKey}`

const getUrlCreditsMovie = idMovie => 
`${apiUrlBase}/movie/${idMovie}/credits?api_key=${apiKey}`

const getUrlImage = (path, size=500) => `https://image.tmdb.org/t/p/w${size}${path}`

// -----------------------------------

function findMovies(query, page=1) {
  const url = getUrlSearch(query, page)
  const keyCache = `query=${query}&page=${page}`
  return getAndCache(keyCache, url )
}

function getMoviesBySection(section, page=1) {
  const url = getUrlBySection(section, page)
  const keyCache = `${section}&page=${page}`
  return getAndCache(keyCache, url)
}

async function getMovieDetails(idMovie) {
  const urlDetails = getUrlDetailsMovie(idMovie)
  const keyCacheDetails = `movie=${idMovie}`
  let movie = await getAndCache(keyCacheDetails, urlDetails)
  const { id } = movie
  const urlCredits = getUrlCreditsMovie(id)
  const keyCacheCredits = `credits=${id}`
  const movieCredits = await getAndCache(keyCacheCredits, urlCredits)        
  movie.credits = movieCredits
  const logosPromisesRequest = movie.production_companies.map( ({ id }) => {
    const url = getUrlDetailsCompany(id)
    const keyCache = `company=${id}`
    return getAndCache(keyCache, url)
  })
  const companiesDetails = await Promise.all(logosPromisesRequest)
  movie.production_companies = companiesDetails
  return movie
}

export { getMoviesBySection, getMovieDetails, findMovies, getUrlImage }