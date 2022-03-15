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
import { FormController } from '../../molecules/form/FormController'
import { TextInput } from '../../atoms/form/TextInput'
import { useUpdateUser } from '../../../hooks/useUpdateUser'

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
  const { updateUser } = useUpdateUser()

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

  const onClickUpdate = async () => {
    await updateUser({ id: selectedUser!.id, targetUser: selectedUser })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormController htmlFor='name' labelText='名前'>
              <TextInput
                id='name'
                value={name}
                onChange={onChangeName}
                isReadOnly={!isAdmin}
              />
            </FormController>
            <FormController htmlFor='userName' labelText='ニックネーム'>
              <TextInput
                id='userName'
                value={userName}
                onChange={onChangeUserName}
                isReadOnly={!isAdmin}
              />
            </FormController>
            <FormController htmlFor='address' labelText='住所'>
              <TextInput
                id='address'
                value={address}
                onChange={onChangeAddress}
                isReadOnly={!isAdmin}
              />
            </FormController>
            <FormController htmlFor='phone' labelText='電話番号'>
              <TextInput
                id='phone'
                value={phone}
                onChange={onChangePhone}
                isReadOnly={!isAdmin}
              />
            </FormController>
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
