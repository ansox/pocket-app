import { loadArticles, saveArticles, saveLastSync } from 'src/services/loader'
import CardArticle from '../CardArticle/CardArticle'

export const QUERY = gql`
  query GetArticlesQuery($code: String!, $since: String!) {
    articles: getPocketArticles(code: $code, since: $since) {
      given_title
      excerpt
      top_image_url
      given_url
      time_added
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const afterQuery = async (data) => {
  console.log('data => ', data)
  await saveArticles(data.articles)
  saveLastSync()
  const localArticles = await loadArticles()
  console.log('localArticles => ', localArticles)
  return { articles: localArticles }
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => {
        return <CardArticle key={article.id} article={article} />
      })}
    </ul>
  )
}
