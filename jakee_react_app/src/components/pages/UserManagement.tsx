import { memo, VFC, useEffect } from 'react'
import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  useDisclosure,
} from '@chakra-ui/react'
import { UserCard } from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'
import { UserDetailModal } from '../organisms/user/UserDetailModa'

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onClickUser = () => onOpen()

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
                onClick={onClickUser}
                imageUrl='https://source.unsplash.com/random'
                name={user.name}
                fullName={user.username}></UserCard>
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  )
})
