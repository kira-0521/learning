import { useCallback, useState } from 'react'
import axios from 'axios'

import { User } from '../types/api/user'
import { useMessage } from './useMessage'

export const useAllUsers = () => {
  const { showMessage } = useMessage()
  const [users, setUsers] = useState<Array<User>>()
  const [loading, setLoading] = useState(false)

  const getUsers = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await axios.get<Array<User>>(
        'https://jsonplaceholder.typicode.com/users'
      )
      if (data && data.length > 0) {
        setUsers(data)
        showMessage({
          title: 'ユーザーの取得に成功しました。',
          status: 'success',
        })
      } else {
        showMessage({ title: 'ユーザーが未登録です。', status: 'info' })
      }
    } catch (err) {
      showMessage({
        title: 'ユーザーが取得できませんでした。',
        status: 'error',
      })
    }
    setLoading(false)
  }, [])
  return { getUsers, users, loading }
}
