import { getPayload } from "payload"
import config from "@payload-config"

/**
 * Get the Payload instance configured for this project.
 * Use this in server components and route handlers.
 */
export async function getPayloadClient() {
  const payloadConfig = await config
  return getPayload({ config: payloadConfig })
}
