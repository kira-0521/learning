import { useState } from 'react'
import { db } from '../../firebaseInit'
import { map } from 'lodash'

export const useAllPosts = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([
    {
      id: '',
      avatar: '',
      image: '',
      text: '',
      username: '',
    },
  ])

  const getAllPosts = async () => {
    setLoading(true)
    await db
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const allPosts = map(snapshot.docs, (doc) => ({
          id: doc.id,
          avatar: doc.data().avatar,
          image: doc.data().image,
          text: doc.data().text,
          username: doc.data().username,
        }))
        setPosts(allPosts)
      })
    setLoading(false)
  }

  return { posts, loading, getAllPosts }
}
