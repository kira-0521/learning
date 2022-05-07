import { useSelector } from 'react-redux'

import { db } from '../../firebaseInit'
import { selectUser } from '../../features/userSlice'
import { TweetPost } from '../../@types/tweet.d'
import { timestamp } from './util'

// ユーザー情報
const user = useSelector(selectUser)

/*

ユーザーのツイート情報をDBに保存

*/
export const postUserTweet = async (
  text: string,
  url?: string
): Promise<void> => {
  await db.collection('posts').add({
    avatar: user.photoUrl,
    image: url || '',
    text,
    timestamp,
    username: user.displayName,
  } as TweetPost)
}
