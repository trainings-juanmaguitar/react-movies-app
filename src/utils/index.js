import axios from 'axios'

function capitalize( text ) {
  return text.replace(/(?:^|\s)\S/g, word => word.toUpperCase() )
}

function formatPrice (cents) {
  return `$ ${(cents / 100).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}

function cleanFirebaseUserObject(user) {
  return Object.keys(user).reduce((cleanedObj, prop) => {
    if (prop.length <= 2) delete cleanedObj[prop]
    return cleanedObj
  }, {...user})
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

export { capitalize, formatPrice, cleanFirebaseUserObject, getAndCache }