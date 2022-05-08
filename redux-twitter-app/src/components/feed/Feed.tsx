import React, { FC, useEffect } from 'react'

import styles from './feed.module.css'
import { logout } from '../../lib/firebase/auth'
import { AlertToast } from '../parts/AlertToast'
import { TweetInput } from '../forms/TweetInput'
import { useMessage } from '../../lib/hooks/useMessage'

export const Feed: FC = () => {
  const { onFloatAlert, showMessage, type, isToast, onCloseToast } =
    useMessage()

  const onClickLogout = async () => {
    await logout()
  }

  useEffect(() => {
    const loginSuccessShowMessage = () => {
      onFloatAlert({ message: 'ログインに成功しました。', type: 'success' })
    }
    loginSuccessShowMessage()

    return () => loginSuccessShowMessage()
  }, [])

  return (
    <div className={styles.feed}>
      <TweetInput />
      <button onClick={onClickLogout}>ログアウト</button>
      <AlertToast
        isOpen={isToast}
        onClose={onCloseToast}
        message={showMessage}
        alertType={type}
      />
    </div>
  )
}
