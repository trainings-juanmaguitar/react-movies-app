import { getAndCache } from '../utils'

const apiKey = 'ba09f3c8c6c830377b422df18cfa833e'
const apiUrlBase = 'https://api.themoviedb.org/3'

const getUrlBySection = (section, page) => 
  `${apiUrlBase}/movie/${section}?page=${page}&api_key=${apiKey}`

const getUrlSearch = (query, page) => 
  `${apiUrlBase}/search/movie?query=${query}&page=${page}&api_key=${apiKey}`

const getUrlDetailsMovie = (idMovie) => 
  `${apiUrlBase}/movie/${idMovie}?api_key=${apiKey}`

const getUrlImage = (path, size=500) => `https://image.tmdb.org/t/p/w${size}${path}`

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

function getMovieDetails(idMovie) {
  const url = getUrlDetailsMovie(idMovie)
  const keyCache = `movie=${idMovie}`
  return getAndCache(keyCache, url)
}

export { getMoviesBySection, getMovieDetails, findMovies, getUrlImage }