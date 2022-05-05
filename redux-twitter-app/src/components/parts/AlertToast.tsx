import React, { FC } from 'react'
import { Snackbar, Button, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

type AlertToastProps = {
  isOpen: boolean
  onClose: () => void
  message: string
}

export const AlertToast: FC<AlertToastProps> = (props: AlertToastProps) => {
  const { isOpen, onClose, message } = props

  const action = (
    <>
      <Button color='secondary' size='small' onClick={onClose}>
        CLOSE
      </Button>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={onClose}>
        <CloseIcon fontSize='small' />
      </IconButton>
    </>
  )

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
      action={action}
    />
  )
}
