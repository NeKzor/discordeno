import Client from "../module/Client.ts";
import { RequestMethod } from "../types/fetch";

type RequestBody = string | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | null | undefined;

class RequestManager {
	client: Client;
	token: string;

  constructor(client: Client, token: string) {
    this.client = client
    this.token = token
  }

	async get(url: string) {
		const headers = this.getDiscordHeaders();
		return fetch(url, { headers }).then(res => res.json())
	}

	async post (url: string, body: RequestBody) {
		const headers = this.getDiscordHeaders();
		return fetch(url, {
			method: RequestMethod.Post,
			headers,
			body
		});
	}

	async delete (url: string, body: RequestBody) {
		const headers = this.getDiscordHeaders();
		return fetch(url, {
			method: RequestMethod.Delete,
			headers,
			body
		});
	}

	// The Record type here plays nice with Deno's `fetch.headers` expected type.
	getDiscordHeaders (): Record<string, string> {
		return {
			Authorization: this.token,
			"User-Agent": `DiscordBot (https://github.com/skillz4killz/discordeno, 0.0.1)`,
		};
	}
}

export default RequestManager
