import { useSelector } from 'react-redux'

import { db } from '../../firebaseInit'
import { selectUser } from '../../features/userSlice'
import { TweetPost } from '../../@types/tweet.d'
import { timestamp } from './util'
