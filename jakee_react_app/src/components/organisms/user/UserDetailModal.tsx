import { memo, VFC } from 'react'
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import { User } from '../../../types/api/user'

type Props = {
  isOpen: boolean
  selectedUser: User | null
  onClose: () => void
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, selectedUser, onClose } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={selectedUser?.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>ニックネーム</FormLabel>
              <Input value={selectedUser?.username} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>出身地</FormLabel>
              <Input value={selectedUser?.address.city} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>電話番号</FormLabel>
              <Input value={selectedUser?.phone} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
