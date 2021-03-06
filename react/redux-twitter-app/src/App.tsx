import React, { useEffect } from 'react'
import { isNil, isEmpty } from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import firebase from 'firebase/app'

import styles from './App.module.css'
import './index.css'
import { selectUser, login, logout } from './features/userSlice'
import { auth } from './firebaseInit'
import { Feed } from './components/feed/Feed'
import { Auth } from './components/auth/Auth'
import { ToastMessageProvider } from './providers/ToastMessageProvider'

function App() {
  const appUser = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(
      (authUser: firebase.User | null) => {
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
      }
    )
    return () => unSubscribe()
  }, [])

  return (
    <ToastMessageProvider>
      <div>
        {isEmpty(appUser.uid) ? (
          <Auth />
        ) : (
          <div className={styles.app}>
            <Feed />
          </div>
        )}
      </div>
    </ToastMessageProvider>
  )
}

export default App
