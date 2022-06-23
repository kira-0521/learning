import {RequestHandler} from "express";
import {client} from "../utils/initializeDiscord";
import {TextChannel} from "discord.js";

export const getChannelName: RequestHandler = async (req, res, next) => {
    // チャンネルID取得
    const channelId = req.params.id as string

    client.channels.fetch(channelId).then(ch => {
        // チャンネルが見つからない
        if (!ch) {
            return res.send({message: 'チャンネルが見つかりません。'})
        }

        // DM以外ならチャンネル名取得
        if (ch.type !== 'DM') {
            return res.send({channelName: ch.name})
        }

    }).catch(err => console.log(err))
}

export const registerDiscordChannel: RequestHandler = async (req, res, next) => {
    // サーバーの取得
    const guild = client.guilds.cache.get('962254062319968287')

    // サーバーが取得できない場合
    if (!guild) {
        return res.status(500).send({message: 'サーバーが見つかりません。'})
    }

    // チャンネルオプション設定
    const body = (req.body as { name: string, reason: string })

    // チャンネル作成
    await guild.channels.create(`${body.name}_channel`, {
        type: 'GUILD_TEXT',
        reason: body.reason
    }).then((ch: TextChannel) => {
        const message = `${ch.name}が${body.name}により作成されました。`
        ch.send(message)
        return res.status(200).json({message})
    }).catch(error => {
        console.log(error.message)
        return res.status(400).send({message: 'チャンネルが正しく作成されませんでした。'})
    })
}