import firebase from 'firebase/app'

export interface PostTweet {
  id?: string
  avatar: string
  image: string
  text: string
  timestamp: firebase.firestore.FieldValue
  username: string
}
