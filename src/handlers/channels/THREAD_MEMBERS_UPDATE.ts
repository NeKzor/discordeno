import { ThreadMembersUpdate } from "../../types/channels/threads/threadMembersUpdate.ts";
import { DiscordGatewayPayload } from "../../types/gateway/gatewayPayload.ts";
import { snowflakeToBigint } from "../../util/bigint.ts";

export async function handleThreadMembersUpdate(data: DiscordGatewayPayload) {
  //   const payload = data.d as ThreadMembersUpdate;
  //   const thread = await cacheHandlers.get("threads", snowflakeToBigint(payload.id));
  //   if (!thread) return;
  //   thread.memberCount = payload.memberCount;
  //   await cacheHandlers.set("threads", thread.id, thread);
  //   eventHandlers.threadMembersUpdate?.(threadMembersUpdateModified(payload));
}
