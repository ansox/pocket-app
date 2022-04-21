import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import CardArticle from 'src/components/CardArticle/CardArticle'

const HomePage = () => {
  const [articles, setArticles] = useState([])

  function articlesToArray(articles) {
    return Object.values(articles)
  }

  useEffect(() => {
    async function loadData() {
      const token = localStorage.getItem('pocket_access_token')

      const articlesObj = await fetch(
        `https://pocket-api.anso.workers.dev/retrieve?code=${token}`
      )
        .then((response) => response.json())
        .then((response) => response.list)

      const arr = articlesToArray(articlesObj)
      console.log(arr)

      setArticles(arr)
    }

    loadData()
  }, [])

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {articles.length > 0 &&
        articles.map((article, index) => {
          return <CardArticle key={`article${index}`} article={article} />
        })}
    </>
  )
}

export default HomePage
