import React, { FC } from 'react'

import { logout } from '../lib/firebase/auth'

export const Feed: FC = () => {
  const onClickLogout = async () => {
    await logout()
  }
  return (
    <div>
      Feed
      <button onClick={onClickLogout}>ログアウト</button>
    </div>
  )
}
