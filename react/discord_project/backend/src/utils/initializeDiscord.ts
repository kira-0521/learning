// BOTトークン取得
import config from "config";
import {Client, Intents} from "discord.js";

const BOT_TOKEN = config.get('BOT_TOKEN') as string

// BOT初期化
export const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]});

(async () => {
    await client.login(BOT_TOKEN)
    client.on('ready', () => console.log('bot ready...'))
})();
