import { DiscordBot } from '.'

const bot = new DiscordBot()
bot.login('トークン').then((res) => console.log(res))
