import React, { FC } from 'react'
import firebase from 'firebase/app'

import styles from './Post.module.css'
import { Avatar } from '@material-ui/core'

type Props = {
  postId: string
  avatar: string
  image: string
  text: string
  username: string
}

export const Post: FC<Props> = (props) => {
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
      </div>
    </div>
  )
}
