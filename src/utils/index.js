import axios from 'axios'
import _ from 'lodash'

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

const makeFnSortArray = ( ...criteria ) => {
  
   const order = criteria.reduce( ( o, item, i) => {
     o[item] = ++i; 
     return o;
   }, {})
   
   return (a, b) => {
     if ( (order[b] && !order[a]) || order[a] > order[b] ) return 1;
     if ( (order[a] && !order[b]) || (order[a] < order[b]) ) return -1;
     if ( a > b ) return 1;
     if ( a < b ) return -1;
     return 0;
   }
 }

function orderByCriteria( arrayToOrder, fieldToSort, aSortOrder ) {
  const sortFn = makeFnSortArray(...aSortOrder)
  const groupedObject = _.groupBy(arrayToOrder, fieldToSort) 
  const orderedKeys = Object.keys(groupedObject).sort(sortFn)
  return orderedKeys.reduce( (acc, key) => {
    acc.push( ...groupedObject[key] )
    return acc
  },[])
}

export { capitalize, formatPrice, cleanFirebaseUserObject, getAndCache, makeFnSortArray, orderByCriteria }