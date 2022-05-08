import React, { FC, useEffect } from 'react'

import styles from './feed.module.css'
import { logout } from '../../lib/firebase/auth'
import { useDiscloser } from '../../lib/hooks/useDiscloser'
import { AlertToast } from '../parts/AlertToast'
import { TweetInput } from '../forms/TweetInput'
import { useMessage } from '../../lib/hooks/useMessage'

export const Feed: FC = () => {
  const { isOpen, onOpen, onClose } = useDiscloser()
  const { onFloatAlert, showMessage, type } = useMessage()

  const onClickLogout = async () => {
    await logout()
  }

  useEffect(() => {
    const loginSuccessShowMessage = () => {
      onOpen()
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
        isOpen={isOpen}
        onClose={onClose}
        message={showMessage}
        alertType={type}
      />
    </div>
  )
}
