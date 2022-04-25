import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import CardArticle from 'src/components/CardArticle/CardArticle'
import {
  loadArticles,
  saveArticles,
  saveLastSync,
  loadLastSync,
} from 'src/services/loader'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #5061e3;

  background-image: radial-gradient(
      at 4% 23%,
      hsl(162, 77%, 40%) 0,
      transparent 59%
    ),
    radial-gradient(at 82% 65%, hsl(198, 100%, 50%) 0, transparent 55%);
`

const HomePage = () => {
  const [articles, setArticles] = useState([])

  function articlesToArray(articles) {
    return Object.values(articles)
  }

  useEffect(() => {
    async function loadData() {
      const token = localStorage.getItem('pocket_access_token')
      const lastSync = loadLastSync()

      // `https://pocket-api.anso.workers.dev/retrieve?code=${token}&since=${lastSync}`

      const articlesObj = await fetch(
        `http://127.0.0.1:8787/retrieve?code=${token}&since=${lastSync}`
      )
        .then((response) => response.json())
        .then((response) => response.list)

      const arr = articlesToArray(articlesObj)

      await saveArticles(arr)
      saveLastSync()
      const local = await loadArticles()
      setArticles(local)
      console.log(local)
    }

    loadData()
  }, [])

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Container>
        {articles.length > 0 &&
          articles.map((article, index) => {
            return <CardArticle key={`article${index}`} article={article} />
          })}
      </Container>
    </>
  )
}

export default HomePage
