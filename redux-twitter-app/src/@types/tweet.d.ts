import firebase from 'firebase/app'

export interface PostTweet {
  avatar: string
  image: string
  text: string
  timestamp: firebase.firestore.FieldValue
  username: string
}
