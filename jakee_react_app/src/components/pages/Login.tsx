import { memo, VFC, useState, ChangeEvent } from 'react'
import { Flex, Heading, Box, Divider, Input, Stack } from '@chakra-ui/react'

import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { useAuth } from '../../hooks/useAuth'

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth()
  const [userId, setUserId] = useState('')
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value)

  const onClickLogin = () => login(userId)

  return (
    <Flex align='center' justify='center' height='100vh'>
      <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
        <Heading>ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder='ユーザーID'
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            onClick={onClickLogin}
            isDisabled={userId === ''}
            isLoading={loading}>
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
