import { memo, VFC, useState, ChangeEvent } from 'react'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { Flex, Heading, Box, Divider, Input, Stack } from '@chakra-ui/react'

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState('')
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value)

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
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
