import { db } from '../../firebaseInit'

export const tweetComments = (postId: string) =>
  db.collection('posts').doc(postId).collection('comments')
