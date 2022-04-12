import { DiscordBot } from '.'

const bot = new DiscordBot()
bot
  .login('OTYyMjc4Njg5OTI2NzA5MzIw.YlFN3Q.KCIYGw0O5uW68OGLT7KSAsHLybs')
  .then((res) => console.log(res))
