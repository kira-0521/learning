import { useCallback } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { User } from '../types/api/User'
import { useLoginUser } from './useLoginUser'

export const useAuth = () => {
  const router = useRouter()
  const { setLoginUser } = useLoginUser()

  const login = useCallback(
    (id: string) => {
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false
            setLoginUser({ ...res.data, isAdmin })
            router.push('/')
          }
        })
        .catch((err) => console.log(err))
    },
    [router, setLoginUser]
  )

  return { login }
}
