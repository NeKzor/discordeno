import type { DiscordGatewayPayload, DiscordMessageReactionRemoveAll } from '@discordeno/types'
import type { Bot } from '../../index.js'

export async function handleMessageReactionRemoveAll(bot: Bot, data: DiscordGatewayPayload) {
  const payload = data.d as DiscordMessageReactionRemoveAll

  bot.events.reactionRemoveAll?.({
    channelId: bot.transformers.snowflake(payload.channel_id),
    messageId: bot.transformers.snowflake(payload.message_id),
    guildId: payload.guild_id ? bot.transformers.snowflake(payload.guild_id) : undefined,
  })
}
