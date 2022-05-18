import React, { FC, FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app'
import { Avatar } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import styles from './Post.module.css'
import { db } from '../../firebaseInit'
import { selectUser } from '../../features/userSlice'
import { isEmpty } from 'lodash'

type Props = {
  postId: string
  avatar: string
  image: string
  text: string
  username: string
}

export const Post: FC<Props> = (props) => {
  const user = useSelector(selectUser)
  const [comment, setComment] = useState('')
  const newComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    db.collection('posts').doc(props.postId).collection('comments').add({
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
        <Avatar src={props.avatar} />
      </div>

      <div className={styles.post_body}>
        <div>
          <div className={styles.post_header}>
            <h3>
              <span className={styles.post_headerUser}>@{props.username}</span>
            </h3>
          </div>

          <div className={styles.post_tweet}>
            <p>{props.text}</p>
          </div>
        </div>
        {props.image && (
          <div className={styles.post_tweetImage}>
            <img src={props.image} alt='tweet' />
          </div>
        )}
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
      </div>
    </div>
  )
}
