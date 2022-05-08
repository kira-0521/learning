import React, { FC, ChangeEvent, memo } from 'react'
import { TextField, IconButton, Modal } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import { getModalStyle } from '../../lib/viewLogics/util'
import { useStyles } from '../auth/style'
import styles from '../auth/auth.module.css'

type Props = {
  openModal: boolean
  closeModal: () => void
  resetEmail: string
  onChangeResetEmail: (e: ChangeEvent<HTMLInputElement>) => void
  sendResetEmail: () => void
}

// eslint-disable-next-line react/display-name
export const ResetEmailModal: FC<Props> = memo((props: Props) => {
  const {
    openModal,
    closeModal,
    resetEmail,
    onChangeResetEmail,
    sendResetEmail,
  } = props
  const classes = useStyles()

  return (
    <Modal open={openModal} onClose={closeModal}>
      <div style={getModalStyle()} className={classes.modal}>
        <div className={styles.login_modal}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            type='email'
            name='email'
            label='Reset E-mail'
            value={resetEmail}
            onChange={onChangeResetEmail}
          />
          <IconButton onClick={sendResetEmail}>
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </Modal>
  )
})
