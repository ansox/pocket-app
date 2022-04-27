export const schema = gql`
  type PocketArticle {
    item_id: String!
    given_title: String!
    excerpt: String
    top_image_url: String
    given_url: String
  }

  type LoginPocket {
    code: String!
  }

  type Query {
    getPocketArticles(code: String!, since: String!): [PocketArticle]! @skipAuth
    login: LoginPocket @skipAuth
  }
`
