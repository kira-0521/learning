import { useCallback, useState } from 'react'
import axios from 'axios'
import { User } from '../types/api/user'
import { useHistory } from 'react-router-dom'
import { useMessage } from './useMessage'

export const useAuth = () => {
  const { showMessage } = useMessage()
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const login = useCallback(
    async (id: string) => {
      setLoading(true)
      try {
        const { data } = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        )
        if (data) {
          history.push('/home')
          showMessage({ title: 'ログインに成功しました。', status: 'success' })
        } else {
          showMessage({
            title: 'ユーザーが見つかりません。',
            status: 'warning',
          })
        }
      } catch (err) {
        showMessage({ title: 'ログインできません。', status: 'error' })
      }
      setLoading(false)
    },
    [history, showMessage]
  )
  return { login, loading }
}
