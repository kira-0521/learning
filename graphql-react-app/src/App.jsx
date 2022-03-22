import { Query } from 'react-apollo'

import { ME } from './graphql'

function App() {
  return (
    <>
      <div className='App'>Hello GraphQL</div>
      <Query query={ME}>
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
