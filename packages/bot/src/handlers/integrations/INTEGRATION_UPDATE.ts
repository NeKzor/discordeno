import type { DiscordGatewayPayload, DiscordIntegrationCreateUpdate } from '@discordeno/types'
import type { Bot } from '../../index.js'

export async function handleIntegrationUpdate(bot: Bot, data: DiscordGatewayPayload): Promise<void> {
  bot.events.integrationUpdate?.(bot.transformers.integration(bot, data.d as DiscordIntegrationCreateUpdate))
}
