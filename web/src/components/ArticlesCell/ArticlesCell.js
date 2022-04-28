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
    }
  }
`

export const Loading = () => <div>Loading...</div>

// export const Empty = async () => {
//   saveLastSync()
//   const localArticles = await loadArticles()
//   console.log(localArticles)

//   return (
//     <ul>
//       {localArticles.map((article) => {
//         return <CardArticle key={article.id} article={article} />
//       })}
//     </ul>
//   )
// }

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  saveArticles(articles)
  saveLastSync()
  loadArticles().then((result) => console.log(result))

  return (
    <ul>
      {articles.map((article) => {
        return <CardArticle key={article.id} article={article} />
      })}
    </ul>
  )
}
