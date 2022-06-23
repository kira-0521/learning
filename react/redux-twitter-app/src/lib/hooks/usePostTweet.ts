import { useSelector } from 'react-redux'

import { selectUser } from '../../features/userSlice'
import { timestamp } from '../firebase/util'
import { PostTweet } from '../../@types/api'
import { db } from '../../firebaseInit'

export const usePostTweet = () => {
  const user = useSelector(selectUser)

  const postUserTweet = async (text: string, url?: string): Promise<void> => {
    await db.collection('posts').add({
      avatar: user.photoUrl,
      image: url || '',
      text,
      timestamp,
      username: user.displayName,
    } as PostTweet)
  }

  return {
    postUserTweet,
  }
}
