import axios from 'axios'

function capitalize( text ) {
  return text.replace(/(?:^|\s)\S/g, word => word.toUpperCase() )
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

export { capitalize, cleanFirebaseUserObject, getAndCache }