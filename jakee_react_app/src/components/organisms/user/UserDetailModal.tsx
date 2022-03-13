import { memo, VFC, useState, useEffect, ChangeEvent } from 'react'
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
import { PrimaryButton } from '../../atoms/button/PrimaryButton'

type Props = {
  isOpen: boolean
  selectedUser: User | null
  isAdmin: boolean
  onClose: () => void
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, selectedUser, isAdmin, onClose } = props

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    setName(selectedUser?.name ?? '')
    setUserName(selectedUser?.username ?? '')
    setAddress(selectedUser?.address.city ?? '')
    setPhone(selectedUser?.phone ?? '')
  }, [selectedUser])

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value)
  const onChangeAddress = (e: ChangeEvent<HTMLInputElement>) =>
    setAddress(e.target.value)
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value)

  const onClickUpdate = () => alert()

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
              <Input
                value={name}
                onChange={onChangeName}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>ニックネーム</FormLabel>
              <Input
                value={userName}
                onChange={onChangeUserName}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>出身地</FormLabel>
              <Input
                value={address}
                onChange={onChangeAddress}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>電話番号</FormLabel>
              <Input
                value={phone}
                onChange={onChangePhone}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter mx={4}>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
})
