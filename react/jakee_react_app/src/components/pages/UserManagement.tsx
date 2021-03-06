import { memo, VFC, useEffect, useCallback } from 'react'
import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  useDisclosure,
} from '@chakra-ui/react'
import { UserCard } from '../organisms/user/UserCard'
import { UserDetailModal } from '../organisms/user/UserDetailModal'
import { useAllUsers } from '../../hooks/useAllUsers'
import { useSelectUser } from '../../hooks/useSelectUser'
import { useLoginUser } from '../../hooks/useLoginUser'

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers()
  const { selectedUser, onSelectUser } = useSelectUser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { loginUser } = useLoginUser()
  console.log('loginUser', loginUser)

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen })
    },
    [users, onOpen, selectedUser]
  )

  useEffect(() => {
    // 非同期関数を返す場合は変数に代入
    const f = async () => {
      await getUsers()
    }
    f()
  }, [])

  return (
    <>
      {loading ? (
        <Center h='100vh'>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justifyContent='center'>
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                onClick={onClickUser}
                imageUrl='https://source.unsplash.com/random'
                name={user.name}
                fullName={user.username}></UserCard>
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        isAdmin={loginUser!.isAdmin}
        onClose={onClose}
        selectedUser={selectedUser!}
      />
    </>
  )
})
