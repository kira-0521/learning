import React, { FC, useEffect } from 'react'

import { logout } from '../../lib/firebase/auth'
import { useDiscloser } from '../../lib/hooks/useDiscloser'
import { AlertToast } from '../parts/AlertToast'
import { TweetInput } from '../forms/TweetInput'

export const Feed: FC = () => {
  const { isOpen, showMessage, setShowMessage, onOpen, onClose } =
    useDiscloser()

  const onClickLogout = async () => {
    await logout()
  }

  useEffect(() => {
    const loginSuccessShowMessage = () => {
      onOpen()
      setShowMessage('ログインに成功しました。')
    }
    loginSuccessShowMessage()

    return () => loginSuccessShowMessage()
  }, [])

  return (
    <div>
      <TweetInput />
      <button onClick={onClickLogout}>ログアウト</button>
      <AlertToast isOpen={isOpen} onClose={onClose} message={showMessage} />
    </div>
  )
}
