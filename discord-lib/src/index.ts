import { Client, Intents } from 'discord.js'

export class DiscordBot {
  client: Client
  constructor() {
    this.client = new Client({
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    })
  }

  public async login(token: string): Promise<{ message: string }> {
    try {
      const res = await this.client.login(token)
      if (!res) {
        throw new Error('Login failed for some reason. Please try again.')
      }
      return { message: 'Successful Bot login.' }
    } catch (e) {
      throw e
    }
  }

  public async getChannelName(channelId: string): Promise<string | undefined> {
    try {
      const res = await this.client.channels.fetch(channelId)
      if (!res) {
        throw new Error(
          'For some reason the channel could not be retrieved. Please try again.'
        )
      }
      if (res.type === 'DM') {
        throw new Error('No channel name exists for the DM channel.')
      }
      return res.name
    } catch (e) {
      throw e
    }
  }
}
