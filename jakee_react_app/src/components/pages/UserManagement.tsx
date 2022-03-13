import { memo, VFC, useEffect } from 'react'
import { Wrap, WrapItem, Spinner, Center } from '@chakra-ui/react'
import { UserCard } from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers()

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
                imageUrl='https://source.unsplash.com/random'
                name={user.name}
                fullName={user.username}></UserCard>
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  )
})
