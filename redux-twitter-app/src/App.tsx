import React, { useEffect } from 'react'
import { isNil, isEmpty } from 'lodash'
import { useSelector, useDispatch } from 'react-redux'

import styles from './App.module.css'
import { selectUser, login, logout } from './features/userSlice'
import { auth } from './firebase'
import { Feed } from './components/Feed'
import { Auth } from './components/auth/Auth'

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
  }, [])

  return (
    <div>
      {isEmpty(appUser.uid) ? (
        <Auth />
      ) : (
        <div className={styles.app}>
          <Feed />
        </div>
      )}
    </div>
  )
}

export default App
