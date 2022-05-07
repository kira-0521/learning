import React, { FC, memo, useState, MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Popover, Button, Box, Typography } from '@material-ui/core'

import styles from './TweetInput.module.css'
import { logout } from '../../lib/firebase/auth'
import { selectUser } from '../../features/userSlice'

// eslint-disable-next-line react/display-name
export const TweetInput: FC = memo(() => {
  const user = useSelector(selectUser)
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <Avatar
        aria-describedby={id}
        className={styles.tweet_avatar}
        src={user.photoUrl}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        p={6}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <Box padding='12px'>
          <Typography>ログアウトしますか？</Typography>
          <Button variant='contained' color='primary' onClick={logout}>
            Logout
          </Button>
        </Box>
      </Popover>
    </div>
  )
})
