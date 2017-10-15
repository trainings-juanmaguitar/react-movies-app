import axios from 'axios'

function capitalize( text ) {
  return text.replace(/(?:^|\s)\S/g, word => word.toUpperCase() )
}

const getAndCache = (function () {
  const cache = {}
  return (keyCache, url) => {
    if (cache[keyCache]) {
      console.log('💾 from cache...');
      return new Promise( (resolve, reject) => {
        resolve(cache[keyCache])
      })
    }
    return axios.get(url)
      .then(response => response.data )
      .then(data => {
        console.log('🔎 fresh request...');
        cache[keyCache] = data 
        return data
      })
  }
})()

export { capitalize, getAndCache }