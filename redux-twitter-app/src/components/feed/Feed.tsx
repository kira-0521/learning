import React, { FC, useEffect } from 'react'

import styles from './feed.module.css'
import { logout } from '../../lib/firebase/auth'
import { AlertToast } from '../parts/AlertToast'
import { TweetInput } from '../forms/TweetInput'
import { useMessage } from '../../lib/hooks/useMessage'

export const Feed: FC = () => {
  const { onFloatAlert, showMessage, type, isToast, onCloseToast } =
    useMessage()

  useEffect(() => {
    const loginSuccessShowMessage = () => {
      onFloatAlert({ message: 'ログインに成功しました。', type: 'success' })
    }
    loginSuccessShowMessage()

    return () => loginSuccessShowMessage()
  }, [])

  const onClickLogout = async () => {
    await logout()
  }

  return (
    <div className={styles.feed}>
      <TweetInput />
      <AlertToast
        isOpen={isToast}
        onClose={onCloseToast}
        message={showMessage}
        alertType={type}
      />
    </div>
  )
}
