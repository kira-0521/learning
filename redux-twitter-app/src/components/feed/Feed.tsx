import React, { FC, useEffect } from 'react'
import { map } from 'lodash'
import { LinearProgress } from '@material-ui/core'

import styles from './feed.module.css'
import { AlertToast } from '../parts/AlertToast'
import { TweetInput } from '../forms/TweetInput'
import { useMessage } from '../../lib/hooks/useMessage'
import { useAllPosts } from '../../lib/hooks/useAllPosts'
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

  return (
    <div className={styles.feed}>
      <TweetInput />
      <AlertToast
        isOpen={isToast}
        onClose={onCloseToast}
        message={showMessage}
        alertType={type}
      />
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          {posts[0].id && (
            <>
              {map(posts, (post) => (
                <Post
                  key={post.id}
                  postId={post.id}
                  username={post.username}
                  avatar={post.avatar}
                  image={post.image}
                  text={post.text}
                />
              ))}
            </>
          )}
        </>
      )}
    </div>
  )
}
