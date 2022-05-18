import React, { FC } from 'react'
import firebase from 'firebase/app'

type Props = {
  postId: string
  avatar: string
  image: string
  text: string
  username: string
}

export const Post: FC<Props> = (props) => {
  return <div>Post</div>
}
