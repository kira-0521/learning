import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const HAM = gql`
  query me {
    user(login: "kira-0521") {
      name
      avatarUrl
    }
  }
`

function App() {
  return (
    <>
      <div className='App'>Hello GraphQL</div>
      <Query query={HAM}>
        {({ data, loading, error }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          return <div>{data.user.name}</div>
        }}
      </Query>
    </>
  )
}

export default App
