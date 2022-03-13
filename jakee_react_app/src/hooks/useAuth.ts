import { useCallback, useState } from 'react'
import axios from 'axios'
import { User } from '../types/api/user'
import { useHistory } from 'react-router-dom'

export const useAuth = () => {
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
        } else {
          alert('ユーザーが見つかりません。')
        }
      } catch (err) {
        alert('ログインできません。')
      }
      setLoading(false)
    },
    [history]
  )
  return { login, loading }
}
