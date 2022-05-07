import { useState, ChangeEvent, useCallback } from 'react'

import { sendResetEmail } from '../firebase/auth'

export const useResetPassword = () => {
  const [isModal, setIsModal] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetPasswordShowMessage, setResetPasswordShowMessage] = useState('')

  const onOpenModal = useCallback(() => setIsModal(true), [isModal, setIsModal])
  const onCloseModal = useCallback(
    () => setIsModal(false),
    [isModal, setIsModal]
  )

  const onChangeResetEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setResetEmail(e.target.value),
    [resetEmail, setResetEmail]
  )

  const fetchResetPassword = async () => {
    try {
      await sendResetEmail(resetEmail)
      setIsModal(false)
      setResetEmail('')
    } catch (err: unknown) {
      setResetEmail('')
      if (err instanceof Error) {
        setResetPasswordShowMessage(err.message)
      }
    }
  }

  return {
    isModal,
    resetEmail,
    resetPasswordShowMessage,
    onCloseModal,
    onOpenModal,
    onChangeResetEmail,
    fetchResetPassword,
  }
}
