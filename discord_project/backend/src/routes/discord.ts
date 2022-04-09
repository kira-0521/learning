import { Router } from 'express'

import {registerDiscordChannel} from '../controllers/discord'

const router = Router()

// チャンネル登録
router.post('/', registerDiscordChannel)

export default router