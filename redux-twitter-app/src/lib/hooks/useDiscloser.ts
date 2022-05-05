import { useState } from 'react'

export const useDiscloser = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showMessage, setShowMessage] = useState('')

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return { isOpen, showMessage, onOpen, onClose, setShowMessage }
}
