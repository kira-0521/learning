import { Amplify } from 'aws-amplify'

import { cognitoConstants } from './constants/auth'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

Amplify.configure(cognitoConstants)

const App = () => (
  <AmplifyAuthenticator>
    <div>
      My App
      <AmplifySignOut />
    </div>
  </AmplifyAuthenticator>
)

export default App
