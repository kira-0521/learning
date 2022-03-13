import { useState, useCallback } from 'react'

import { User } from '../types/api/user'

type Props = {
  id: number
  users: Array<User>
  onOpen: () => void
}

export const useSelectUser = () => {
  const [selectedUser, setSelectUser] = useState<User | null>(null)

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props
    const findUser = users.find((user) => user.id === id)
    // ユーザーカードをクリックした時に発火するようになるため、存在しないことがない
    setSelectUser(findUser!)
    onOpen()
  }, [])
  return { onSelectUser, selectedUser }
}
