import { useCallback, useState } from 'react'
import axios from 'axios'

import { User } from '../types/api/user'
import { useMessage } from './useMessage'
import { useAllUsers } from './useAllUsers'

type Props = {
  id: number
  targetUser: User | null
}

export const useUpdateUser = () => {
  const { showMessage } = useMessage()
  const { getUsers } = useAllUsers()

  const updateUser = useCallback(async (props: Props) => {
    const { id, targetUser } = props

    try {
      const { data } = await axios.put<Array<User>>(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        targetUser
      )
      console.log(data)
      if (data) {
        await getUsers()
        showMessage({
          title: 'ユーザーの更新に成功しました。',
          status: 'success',
        })
      }
    } catch (err) {
      showMessage({
        title: 'ユーザーが取得できませんでした。',
        status: 'error',
      })
    }
  }, [])
  return { updateUser }
}
