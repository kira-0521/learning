import React, { FC, useEffect, useState } from 'react'

import { logout } from '../lib/firebase/auth'
import { useDiscloser } from '../lib/hooks/useDiscloser'
import { AlertToast } from './parts/AlertToast'

export const Feed: FC = () => {
  const { isOpen, onOpen, onClose } = useDiscloser()
  const [showMessage, setShowMessage] = useState('')

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
      Feed
      <button onClick={onClickLogout}>ログアウト</button>
      <AlertToast isOpen={isOpen} onClose={onClose} message={showMessage} />
    </div>
  )
}
