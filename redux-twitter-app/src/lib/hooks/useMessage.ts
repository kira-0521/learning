import { useState } from 'react'

type Props = {
  message: string
  type: 'success' | 'info' | 'warning' | 'error'
}

export const useMessage = () => {
  const [showMessage, setShowMessage] = useState('')
  const [type, setType] = useState<Props['type']>('success')

  const onFloatAlert = (props: Props) => {
    setShowMessage(props.message)
    setType(props.type)
  }

  return { showMessage, type, onFloatAlert }
}
