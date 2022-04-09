import express, {Application, Request, Response} from 'express'
import config from 'config'
import { client } from "./utils/initializeDiscord";

import discordRoute from './routes/discord'
import {Message} from "discord.js";

const initializeServer = async () => {
    const app: Application = express()
    const PORT = config.get('PORT') as string

    // json返却 / body処理用
    app.use(express.json())

    // urlエンコード / body処理用
    app.use(express.urlencoded({extended: true}))

    // discord用ルーティング
    app.use('/discord', discordRoute)

    // エラー処理
    app.get('*', (err: Error, req: Request, res: Response) => {
        res.status(500).json({message: err.message})
    })

    // メッセージに反応
    client.on('messageCreate', (message: Message) => {
        if(message.author.bot) return
        message.channel.send('botです')
    })

    app.listen(PORT, () => {
        console.log(`dev server running at: http://localhost:${PORT}/`)
    })
}

(async () => {
    await initializeServer()
})()