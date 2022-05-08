import React, { FC, useEffect, useState } from 'react'

import styles from './feed.module.css'
import { logout } from '../../lib/firebase/auth'
import { AlertToast } from '../parts/AlertToast'
import { TweetInput } from '../forms/TweetInput'
import { useMessage } from '../../lib/hooks/useMessage'
import { useAllPosts } from '../../lib/hooks/useAllPosts'
import { map } from 'lodash'
import { Post } from '../post/Post'

export const Feed: FC = () => {
  const { onFloatAlert, showMessage, type, isToast, onCloseToast } =
    useMessage()
  const { posts, loading, getAllPosts } = useAllPosts()

  useEffect(() => {
    const loginSuccessShowMessage = () => {
      onFloatAlert({ message: 'ログインに成功しました。', type: 'success' })
    }
    loginSuccessShowMessage()

    const getPostsList = async () => {
      await getAllPosts().catch((e: unknown) => {
        if (e instanceof Error) {
          onFloatAlert({ message: e.message, type: 'error' })
        }
      })
    }
    getPostsList()

    return () => {
      loginSuccessShowMessage()
      getPostsList()
    }
  }, [])

  const onClickLogout = async () => {
    await logout()
  }

  return (
    <div className={styles.feed}>
      <TweetInput />
      <AlertToast
        isOpen={isToast}
        onClose={onCloseToast}
        message={showMessage}
        alertType={type}
      />
      {map(posts, (post) => (
        <Post
          key={post.id}
          postId={post.id}
          username={post.username}
          avatar={post.avatar}
          image={post.image}
          timestamp={post.timestamp}
          text={post.text}
        />
      ))}
    </div>
  )
}
