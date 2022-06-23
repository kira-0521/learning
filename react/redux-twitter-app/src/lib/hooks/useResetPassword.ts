import { useCallback } from 'react'

import { sendResetEmail } from '../firebase/auth'
import { useMessage } from './useMessage'

type Props = {
  resetEmail: string
  callback: () => void
}

export const useResetPassword = () => {
  const { onFloatAlert } = useMessage()

  const fetchResetPassword = useCallback(
    async (props: Props) => {
      const { resetEmail, callback } = props
      try {
        await sendResetEmail(resetEmail)
        callback()
      } catch (err: unknown) {
        callback()
        if (err instanceof Error) {
          onFloatAlert({ message: err.message, type: 'error' })
        }
      }
    },
    [onFloatAlert]
  )

  return {
    fetchResetPassword,
  }
}
