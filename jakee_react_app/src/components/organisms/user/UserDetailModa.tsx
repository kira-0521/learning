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

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props

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
  )
})
