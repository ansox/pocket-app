import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import CardArticle from 'src/components/CardArticle/CardArticle'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  flex-wrap: wrap;
`

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
