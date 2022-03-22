import React from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

import { signInAction } from '../reducks/users/actions'

const Login = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h2>ログインページ</h2>
      <button
        onClick={() => {
          dispatch(signInAction({ uid: '00001', username: 'tanakakira' }))
          dispatch(push('/'))
        }}>
        ログイン
      </button>
    </div>
  )
}

export default Login
