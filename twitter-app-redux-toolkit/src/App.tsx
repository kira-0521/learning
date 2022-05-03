import React, { useEffect } from 'react'
import { isNil } from 'lodash'

import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, logout } from './features/userSlice'
import { auth } from './firebase'
function App() {
  const appUser = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (isNil(authUser)) {
        dispatch(logout())
        return
      }
      dispatch(
        login({
          uid: authUser.uid,
          photoUrl: authUser.photoURL || '',
          displayName: authUser.displayName || '',
        })
      )
    })
    return () => unSubscribe()
  })

  return <div className='App'></div>
}

export default App;
export default App
