import { ApolloClient } from 'apollo-boost'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-boost'
import { InMemoryCache } from 'apollo-boost'

const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

const headersLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  })
  return forward(operation)
})

const endpoint = 'https://api.github.com/graphql'
const httpLink = new HttpLink({ uri: endpoint })
const link = ApolloLink.from([headersLink, httpLink])

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
