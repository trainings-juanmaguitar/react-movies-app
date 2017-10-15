import { getAndCache } from '../utils'

const apiKey = 'ba09f3c8c6c830377b422df18cfa833e'
const apiUrlBase = 'https://api.themoviedb.org/3'

const getUrlBySection = (section, page) => 
  `${apiUrlBase}/movie/${section}?page=${page}&api_key=${apiKey}`

const getUrlSearch = (query, page) => 
  `${apiUrlBase}/search/movie?query=${query}&page=${page}&api_key=${apiKey}`


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

export { getMoviesBySection, findMovies }