import { memo, VFC } from 'react'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
} from '@chakra-ui/react'

type Props = {
  onClose: () => void
  isOpen: boolean
  onClickHome: () => void
  onClickUserManagement: () => void
  onClickSetting: () => void
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting,
  } = props

  return (
    <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg='gray.100'>
            <Button w='100%' onClick={onClickHome}>
              Top
            </Button>
            <Button w='100%' onClick={onClickUserManagement}>
              ユーザー設定
            </Button>
            <Button w='100%' onClick={onClickSetting}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})
