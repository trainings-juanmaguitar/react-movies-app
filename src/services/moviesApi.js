import { getAndCache } from '../utils'

const apiKey = 'ba09f3c8c6c830377b422df18cfa833e'
const apiUrlBase = 'https://api.themoviedb.org/3'

const getUrlBySection = section => 
  `${apiUrlBase}/movie/${section}?api_key=${apiKey}`

const getUrlSearch = query => 
  `${apiUrlBase}/search/movie?query=${query}&api_key=${apiKey}`


function findMovies(query) {
  const url = getUrlSearch(query)
  const keyCache = `query=${query}`
  return getAndCache(url, keyCache)
}

function getMoviesBySection(section) {
  const url = getUrlBySection(section)
  const keyCache = section
  return getAndCache(url, keyCache)
}

export { getMoviesBySection, findMovies }