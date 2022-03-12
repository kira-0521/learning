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
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props

  return (
    <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg='gray.100'>
            <Button w='100%'>Top</Button>
            <Button w='100%'>ユーザー一覧</Button>
            <Button w='100%'>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})
