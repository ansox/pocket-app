import { loadArticles, saveArticles, saveLastSync } from 'src/services/loader'
import CardArticle from '../CardArticle/CardArticle'
import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
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

const Loading = () => <div>Loading...</div>

const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

const Success = ({ articles }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center pt-3">
      {articles.map((article) => {
        return <CardArticle key={article.id} article={article} />
      })}
    </div>
  )
}

const ArticlesCell = (props) => {
  const { error, loading, data } = useQuery(QUERY, {
    variables: { code: props.code, since: props.since },
  })

  const [articles, setArticles] = React.useState(null)

  React.useEffect(() => {
    async function afterLoad() {
      if (data) {
        console.log('data => ', data)
        await saveArticles(data.articles)
        saveLastSync()
      }
      const localArticles = await loadArticles()
      setArticles({ articles: localArticles })
    }

    afterLoad()
  }, [data])

  if (error) {
    if (Failure) {
      return <Failure error={error} />
    } else {
      console.error(error)
    }
  } else if (loading) {
    return <Loading />
  } else if (articles) {
    return <Success {...articles} />
  }
}

export default ArticlesCell
