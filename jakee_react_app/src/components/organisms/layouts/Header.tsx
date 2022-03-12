import { Flex, Heading, Box, Link, useDisclosure } from '@chakra-ui/react'
import { memo, VFC, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { MenuIconButton } from '../../atoms/button/MenuIconButton'
import { MenuDrawer } from '../../molecules/MenuDrawer'

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history = useHistory()

  // 複数箇所で使用するため、不要な再レンダリングが走らないようにuseCallbackラップ
  const onClickHome = useCallback(() => history.push('/home'), [history])
  const onClickUserManagement = useCallback(
    () => history.push('/home/user_management'),
    [history]
  )
  const onClickSetting = useCallback(
    () => history.push('/home/setting'),
    [history]
  )

  return (
    <>
      <Flex
        as='nav'
        bg='teal.500'
        color='gray.50'
        align='center'
        justify='space-between'
        padding={{ base: 3, md: 5 }}>
        <Flex
          align='center'
          as='a'
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={onClickHome}>
          <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align='center'
          fontSize='sm'
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
      />
    </>
  )
})
