import { gql } from 'apollo-boost'

export const ME = gql`
  query me {
    user(login: "kira-0521") {
      name
      avatarUrl
    }
  }
`
