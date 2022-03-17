import { useCallback } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { User } from '../types/api/User'
import { useLoginUser } from './useLoginUser'
import { useLoading } from './useLoading'

export const useAuth = () => {
  const router = useRouter()
  const { setLoginUser } = useLoginUser()
  const { loading, setLoading } = useLoading()

  const login = useCallback(
    (id: string) => {
      setLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false
            setLoginUser({ ...res.data, isAdmin })
            setLoading(false)
            router.push('/')
          }
        })
        .catch((err) => console.log(err))
    },
    [router, setLoading, setLoginUser]
  )

  return { login, loading }
}
