export const schema = gql`
  type PocketArticle {
    item_id: String!
    given_title: String!
  }

  type Query {
    getPocketArticles(code: String!, since: String!): [PocketArticle]! @skipAuth
  }
`
