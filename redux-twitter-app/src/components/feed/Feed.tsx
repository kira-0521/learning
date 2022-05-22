import React, { FC, useEffect, Suspense } from 'react'
import { map } from 'lodash'
import { LinearProgress } from '@material-ui/core'
import { ErrorBoundary } from 'react-error-boundary'

import styles from './feed.module.css'
import { AlertToast } from '../parts/AlertToast'
import { TweetInput } from '../forms/TweetInput'
import { useMessage } from '../../lib/hooks/useMessage'
import { useAllPosts } from '../../lib/hooks/useAllPosts'
import { Post } from '../post/Post'

export const Feed: FC = () => {
  /*
    Hooks
  */
  const { onFloatAlert, showMessage, type, isToast, onCloseToast } =
    useMessage()
  const { posts, getAllPosts } = useAllPosts()

  /*
    Fetch Posts List
  */
  useEffect(() => {
    let isMounted = true

    if (isMounted) {
      onFloatAlert({ message: 'ログインに成功しました。', type: 'success' })
    }

    const getPostsList = async () => {
      await getAllPosts().catch((e: unknown) => {
        if (e instanceof Error) {
          isMounted && onFloatAlert({ message: e.message, type: 'error' })
        }
      })
    }
    getPostsList()

    return () => {
      isMounted = false
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
      <ErrorBoundary fallback={<div>error</div>}>
        <Suspense fallback={<LinearProgress />}>
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
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
