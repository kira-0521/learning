import { memo, VFC } from 'react'
import {
  Flex,
  Heading,
  Box,
  Divider,
  Input,
  Button,
  Stack,
} from '@chakra-ui/react'

export const Login: VFC = memo(() => {
  return (
    <Flex align='center' justify='center' height='100vh'>
      <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
        <Heading>ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder='ユーザーID' />
          <Button bg='teal.400' color='white' _hover={{ opacity: 0.8 }}>
            ログイン
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
})
