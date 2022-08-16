import { Amplify } from 'aws-amplify'

import { cognitoConstants } from './constants/auth'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { useEffect, useState } from 'react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { changeCognitoStatus, testGetApiGateway } from './lib/api'

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

  const onClickTestGet = async () => {
    const res = await testGetApiGateway()
    console.log(res)
  }

  const onClickChangeCognitoStatus = async () => {
    const result = await changeCognitoStatus()
    console.log(result)
  }

  return authState === AuthState.SignedIn && user ? (
    <div className='App'>
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
      <div style={{ marginTop: '100px' }}>
        <h2>cognito change test</h2>
        <button onClick={onClickTestGet}>send get</button>
        <button onClick={onClickChangeCognitoStatus}>send post</button>
      </div>
    </div>
  ) : (
    <AmplifyAuthenticator />
  )
}

export default AuthStateApp
