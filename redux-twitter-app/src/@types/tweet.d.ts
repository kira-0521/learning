import firebase from 'firebase/app'

export interface TweetPost {
  avatar: string
  image: string
  text: string
  timestamp: firebase.firestore.FieldValue
  username: string
}
