import { useCallback, useState } from 'react'
import axios from 'axios'
import { User } from '../types/api/user'
import { useHistory } from 'react-router-dom'
import { useMessage } from './useMessage'
import { useLoginUser } from './useLoginUser'

export const useAuth = () => {
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser()
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
          const isAdmin = data.id === 10 ? true : false
          setLoginUser({ ...data, isAdmin })
          showMessage({ title: 'ログインに成功しました。', status: 'success' })
          history.push('/home')
        } else {
          showMessage({
            title: 'ユーザーが見つかりません。',
            status: 'warning',
          })
          setLoading(false)
        }
      } catch (err) {
        showMessage({ title: 'ログインできません。', status: 'error' })
        setLoading(false)
      }
    },
    [history, showMessage, setLoginUser]
  )
  return { login, loading }
}
