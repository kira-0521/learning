import React, { FC, memo } from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

type AlertToastProps = {
  isOpen: boolean
  onClose: () => void
  message: string
  alertType?: 'success' | 'info' | 'warning' | 'error'
}

// eslint-disable-next-line react/display-name
export const AlertToast: FC<AlertToastProps> = memo(
  (props: AlertToastProps) => {
    const { isOpen, onClose, message, alertType = 'success' } = props

    return (
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
        <MuiAlert
          elevation={6}
          variant='filled'
          onClose={onClose}
          severity={alertType}>
          {message}
        </MuiAlert>
      </Snackbar>
    )
  }
)
