import React, {
  FC,
  memo,
  useState,
  MouseEvent,
  FormEvent,
  useCallback,
  ChangeEvent,
} from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Button, Box, Typography, IconButton } from '@material-ui/core'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import firebase from 'firebase/app'
import { isEmpty } from 'lodash'

import styles from './TweetInput.module.css'
import { logout } from '../../lib/firebase/auth'
import { selectUser } from '../../features/userSlice'
import { isNil } from 'lodash'
import { getUniqueChar } from '../../lib/viewLogics/util'
import { storage } from '../../firebaseInit'
import { ClickPopover } from '../parts/ClickPopover'
import { usePostTweet } from '../../lib/hooks/usePostTweet'
import { onChangeImageHandler } from '../../lib/viewLogics/form'
import { AlertToast } from '../parts/AlertToast'
import { useMessage } from '../../lib/hooks/useMessage'

// eslint-disable-next-line react/display-name
export const TweetInput: FC = memo(() => {
  const user = useSelector(selectUser)
  const { postUserTweet } = usePostTweet()
  const { onFloatAlert, showMessage, type, isToast, onCloseToast } =
    useMessage()

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
            onFloatAlert({ message: err.message, type: 'error' })
          }
        },
        async () => {
          await storage
            .ref('images')
            .child(fileName)
            .getDownloadURL()
            .then(async (url) => {
              await postUserTweet(tweetText, url)
              onFloatAlert({
                message: 'Tweetを送信しました。',
                type: 'success',
              })
            })
        }
      )
    } else {
      await postUserTweet(tweetText)
      onFloatAlert({ message: 'Tweetを送信しました。', type: 'success' })
    }

    refreshTweet()
  }

  return (
    <>
      <form onSubmit={sendTweet}>
        <div className={styles.tweet_form}>
          <Avatar
            aria-describedby={id}
            className={styles.tweet_avatar}
            src={user.photoUrl}
            onClick={(e: MouseEvent<HTMLDivElement>) => {
              setAnchorEl(e.currentTarget)
            }}
          />
          <ClickPopover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}>
            <Box>
              <Typography>ログアウトしますか？</Typography>
              <Button variant='contained' color='primary' onClick={logout}>
                Logout
              </Button>
            </Box>
          </ClickPopover>
          <input
            className={styles.tweet_input}
            placeholder="What's happening?"
            type='text'
            autoFocus
            value={tweetText}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTweetText(e.target.value)
            }
          />
          <IconButton>
            <label>
              <AddAPhotoIcon
                className={
                  tweetImage ? styles.tweet_addIconLoaded : styles.tweet_addIcon
                }
              />
              <input
                className={styles.tweet_hiddenIcon}
                type='file'
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChangeImageHandler(e, setTweetImage)
                }
              />
            </label>
          </IconButton>
        </div>
        <Button
          type='submit'
          disabled={isEmpty(tweetText)}
          className={
            tweetText ? styles.tweet_sendBtn : styles.tweet_sendDisableBtn
          }>
          Tweet
        </Button>
      </form>
      <AlertToast
        isOpen={isToast}
        onClose={onCloseToast}
        message={showMessage}
        alertType={type}
      />
    </>
  )
})
