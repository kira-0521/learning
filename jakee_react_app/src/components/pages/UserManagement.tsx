import { memo, VFC, useEffect } from 'react'
import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  Stack,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { UserCard } from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'

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
      <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value='satoshi' isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value='satoshi' isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value='satoshi' isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value='satoshi' isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
})
