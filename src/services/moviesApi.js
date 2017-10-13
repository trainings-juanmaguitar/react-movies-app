import axios from 'axios'

const apiKey = 'ba09f3c8c6c830377b422df18cfa833e'
const apiUrlBase = 'https://api.themoviedb.org/3'

const getUrlBySection = section => 
  `${apiUrlBase}/movie/${section}?api_key=${apiKey}`

const getUrlSearch = query => 
  `${apiUrlBase}/search/movie?query=${query}&api_key=${apiKey}`

const cache = {}

function findMovies(query) {
  const url = getUrlSearch(query)
  const keyCache = `query=${query}`
  if (cache[keyCache]) {
    console.log('💾 from cache...');
    return new Promise( (resolve, reject) => {
      resolve(cache[keyCache])
    })
  }
  else {
    return axios.get(url)
      .then(response => response.data && response.data.results)
      .then(data => {
        console.log('🔎 fresh request...');
        cache[keyCache] = data 
        return data
      })
  }
}

function getMoviesBySection(section) {
  const url = getUrlBySection(section)
  if (cache[section]) {
    console.log('💾 from cache...');
    return new Promise( (resolve, reject) => {
      resolve(cache[section])
    })
  }
  else {
    return axios.get(url)
      .then(response => response.data && response.data.results)
      .then(data => {
        console.log('🔎 fresh request...');
        cache[section] = data 
        return data
      })
  }
  
}

export { getMoviesBySection, findMovies }