import firebase from 'firebase/app'

interface Comment {
  id: string
  avatar: string
  text: string
  username: string
}

export interface PostTweet {
  id?: string
  avatar: string
  image: string
  text: string
  username: string
}

export interface User {
  uid: string
  photoUrl: string
  displayName: string
}

export interface UserContent {
  photoURL: string
  displayName: string
}
