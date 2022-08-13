import { Amplify } from 'aws-amplify'

import { cognitoConstants } from './constants/auth'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { useEffect, useState } from 'react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

Amplify.configure(cognitoConstants)

const AuthStateApp = () => {
  const [authState, setAuthState] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  return authState === AuthState.SignedIn && user ? (
    <div className='App'>
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator />
  )
}

export default AuthStateApp
