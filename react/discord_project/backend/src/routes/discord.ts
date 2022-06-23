import { Router } from 'express'

import {getChannelName, registerDiscordChannel} from '../controllers/discord'

const router = Router()

// チャンネル名取得
router.get ('/:id', getChannelName)
// チャンネル登録
router.post('/', registerDiscordChannel)

export default router