import { memo, VFC, useState, useEffect, ChangeEvent } from 'react'
import {
  Stack,
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
import { TextForm } from '../../molecules/form/TextForm'

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
            <TextForm
              value={name}
              isReadOnly={!isAdmin}
              onChange={onChangeName}>
              名前
            </TextForm>
            <TextForm
              value={userName}
              isReadOnly={!isAdmin}
              onChange={onChangeUserName}>
              ニックネーム
            </TextForm>
            <TextForm
              value={address}
              isReadOnly={!isAdmin}
              onChange={onChangeAddress}>
              出身地
            </TextForm>
            <TextForm
              value={phone}
              isReadOnly={!isAdmin}
              onChange={onChangePhone}>
              電話番号
            </TextForm>
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
