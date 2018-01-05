const baseUrl = 'https://api.coinmarketcap.com'

const handleErrors = res => {
  if(!res.ok) throw Error(res.statusText)
  else return res
}

const get = () => {
    if(typeof window !== 'undefined' && localStorage.getItem('api-cache') && localStorage.getItem('api-updated'))
      if(+new Date() - localStorage.getItem('api-updated') < 1800000)
        return JSON.parse(localStorage.getItem('api-cache'))
      else console.log('not recent enough')
    else console.log('not in cache')
}

const set = (data) => {
  if(typeof window !== 'undefined') {
    localStorage.setItem('api-cache', JSON.stringify(data))
    localStorage.setItem('api-updated', +new Date())
    return data
  }
}

const cache = () => {
  const data = get()

  if(data && typeof window !== 'undefined')
    return Promise.resolve(data)
  else
    return fetch(`${baseUrl}/v1/ticker/?convert=EUR&limit=10`)
      .then(handleErrors)
      .then(res => res.json())
      .then(data => set(data))
}



export default () => dispatch => {
  dispatch({ type: 'FETCHING_COIN_DATA' })
  return cache()
    .then(data => dispatch({ type: 'FETCHING_COIN_DATA_SUCCESS', payload: data }))
    .catch(err => dispatch({ type: 'FETCHING_COIN_DATA_FAIL', payload: err }))
}
