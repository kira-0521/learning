import React, {
  FC,
  memo,
  useState,
  MouseEvent,
  FormEvent,
  useCallback,
} from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Popover, Button, Box, Typography } from '@material-ui/core'
import { isString } from 'lodash'
import firebase from 'firebase/app'

import styles from './TweetInput.module.css'
import { logout } from '../../lib/firebase/auth'
import { selectUser } from '../../features/userSlice'
import { isNil } from 'lodash'
import { getUniqueChar } from '../../lib/viewLogics/util'
import { storage } from '../../firebaseInit'
import { postUserTweet } from '../../lib/firebase/db'

// eslint-disable-next-line react/display-name
export const TweetInput: FC = memo(() => {
  const user = useSelector(selectUser)

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  const [tweetText, setTweetText] = useState('')
  const [tweetImage, setTweetImage] = useState<File | null>(null)

  const refreshTweet = useCallback(() => {
    setTweetText('')
    setTweetImage(null)
  }, [tweetText, tweetImage, setTweetText, setTweetImage])

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const sendTweet = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    // リフレッシュ阻止
    e.preventDefault()

    if (!isNil(tweetImage)) {
      const randomChar = getUniqueChar()
      const fileName = `${randomChar}_${tweetImage.name}`
      const uploadTweetImage = storage.ref(`images/${fileName}`).put(tweetImage)
      uploadTweetImage.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        (err: unknown) => {
          if (err instanceof Error) {
            alert(err.message)
          }
        },
        async () => {
          await storage
            .ref('images')
            .child(fileName)
            .getDownloadURL()
            .then(async (url) => {
              return await postUserTweet(tweetText, url)
            })
        }
      )
    } else {
      await postUserTweet(tweetText)
    }

    refreshTweet()
  }

  return (
    <div>
      <Avatar
        aria-describedby={id}
        className={styles.tweet_avatar}
        src={user.photoUrl}
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          setAnchorEl(e.currentTarget)
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <Box>
          <Typography>ログアウトしますか？</Typography>
          <Button variant='contained' color='primary' onClick={logout}>
            Logout
          </Button>
        </Box>
      </Popover>
    </div>
  )
})
