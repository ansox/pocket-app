/* eslint-disable camelcase */
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'

const LoadingPage = () => {
  async function getToken() {
    const code = localStorage.getItem('pocket_code')
    const { access_token, username } = await fetch(
      `https://pocket-api.anso.workers.dev/authorize?code=${code}`
    ).then((response) => response.json())

    localStorage.setItem('pocket_access_token', access_token)
    localStorage.setItem('pocket_username', username)
    navigate('/home')
  }

  useEffect(() => {
    getToken()
  }, [])

  return (
    <>
      <MetaTags title="Loading" description="Loading page" />

      <h1>LoadingPage</h1>
      <p>
        Find me in <code>./web/src/pages/LoadingPage/LoadingPage.js</code>
      </p>
      <p>
        My default route is named <code>loading</code>, link to me with `
        <Link to={routes.loading()}>Loading</Link>`
      </p>
    </>
  )
}

export default LoadingPage
