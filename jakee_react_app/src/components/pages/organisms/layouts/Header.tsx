import { Flex, Heading, Box, Link, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { memo, VFC } from 'react'
export const Header: VFC = memo(() => {
  return (
    <Flex
      as='nav'
      bg='teal.500'
      color='gray.50'
      align='center'
      justify='space-between'
      padding={{ base: 3, md: 5 }}>
      <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }}>
        ユーザー管理アプリ
      </Heading>
      <Flex
        align='center'
        fontSize='sm'
        flexGrow={2}
        display={{ base: 'none', md: 'flex' }}>
        <Box pr={4}>
          <Link>ユーザー一覧</Link>
        </Box>
        <Link>設定</Link>
      </Flex>
      <IconButton
        aria-label='メニューボタン'
        icon={<HamburgerIcon />}
        size='sm'
        variant='unstyled'
        display={{ base: 'block', md: 'none' }}></IconButton>
    </Flex>
  )
})
