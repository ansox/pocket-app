import { fetch, Headers } from 'cross-undici-fetch'

export const getPocketArticles = async ({ code, since }) => {
  function articlesToArray(articles) {
    return Object.values(articles)
  }

  const raw = JSON.stringify({
    consumer_key: process.env.POCKET_APP_ID,
    access_token: code,
    sort: 'newest',
    status: 'unread',
    since,
  })

  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json; charset=UTF8')
  myHeaders.append('X-Accept', 'application/json')

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  const result = await fetch('https://getpocket.com/v3/get', requestOptions)
    .then((result) => result.json())
    .then((result) => result.list)

  const arr = articlesToArray(result)

  return arr
}

export const login = async () => {
  const raw = JSON.stringify({
    consumer_key: process.env.POCKET_APP_ID,
    redirect_uri: 'http://localhost:3000/',
  })

  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json; charset=UTF8')
  myHeaders.append('X-Accept', 'application/json')

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  const result = await fetch(
    'https://getpocket.com/v3/oauth/request',
    requestOptions
  ).then((result) => result.json())

  console.log(result)

  return result
}
