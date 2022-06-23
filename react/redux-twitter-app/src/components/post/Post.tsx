import React, { FC, FormEvent, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app'
import { isEmpty, map } from 'lodash'
import { Avatar, makeStyles } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import MessageIcon from '@material-ui/icons/Message'

import styles from './Post.module.css'
import { selectUser } from '../../features/userSlice'
import { Comment } from '../../@types/api'
import { tweetComments } from '../../lib/firebase/db'

type Props = {
  postId: string
  avatar: string
  image: string
  text: string
  username: string
}

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}))

export const Post: FC<Props> = ({ postId, avatar, image, text, username }) => {
  const classes = useStyles()
  const user = useSelector(selectUser)
  const [openComments, setOpenComments] = useState(false)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '',
      avatar: '',
      text: '',
      username: '',
    },
  ])

  useEffect(() => {
    const unSub = tweetComments(postId).onSnapshot((snapshot) => {
      setComments(
        map(snapshot.docs, (doc) => ({
          id: doc.id,
          avatar: doc.data().avatar,
          text: doc.data().text,
          username: doc.data().username,
        }))
      )
    })
    return () => {
      unSub()
    }
  }, [postId])

  const newComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    tweetComments(postId).add({
      avatar: user.photoUrl,
      username: user.displayName,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setComment('')
  }
  return (
    <div className={styles.post}>
      <div className={styles.post_avatar}>
        <Avatar src={avatar} />
      </div>

      <div className={styles.post_body}>
        <div>
          <div className={styles.post_header}>
            <h3>
              <span className={styles.post_headerUser}>@{username}</span>
            </h3>
          </div>

          <div className={styles.post_tweet}>
            <p>{text}</p>
          </div>
        </div>
        {image && (
          <div className={styles.post_tweetImage}>
            <img src={image} alt='tweet' />
          </div>
        )}

        <MessageIcon
          className={styles.post_commentIcon}
          onClick={() => setOpenComments(!openComments)}
        />

        {openComments && (
          <>
            {comments.map((com) => (
              <div key={com.id} className={styles.post_comment}>
                <Avatar src={com.avatar} className={classes.small} />

                <span className={styles.post_commentUser}>@{com.username}</span>
                <span className={styles.post_commentText}>{com.text} </span>
              </div>
            ))}
            <form onSubmit={newComment}>
              <div className={styles.post_form}>
                <input
                  className={styles.post_input}
                  type='text'
                  placeholder='Type new comment...'
                  value={comment}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setComment(e.target.value)
                  }
                />
                <button
                  disabled={isEmpty(comment)}
                  className={
                    !isEmpty(comment)
                      ? styles.post_button
                      : styles.post_buttonDisable
                  }
                  type='submit'>
                  <SendIcon className={styles.post_sendIcon} />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
