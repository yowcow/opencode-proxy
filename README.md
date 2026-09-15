# opencode-proxy

The official AnythingLLM Android app cannot send the custom `x-opencode-session` header,
so connecting directly to opencode Zen/Go (`https://opencode.ai/zen/go/v1`) fails with `400 MissingSessionID`.
This Worker is a minimal proxy that attaches the header automatically.

The Worker holds no API key. The `Authorization` header is forwarded as-is from the client.

## Deploy

```sh
make login
make deploy
```

Use the `https://xxx.workers.dev` issued after `make deploy`.

## AnythingLLM Mobile Setup

1. Select Generic OpenAI Compatible
2. Set the Base URL to `https://xxx.workers.dev/v1`
3. Enter the API key on the AnythingLLM side (not on the Worker side)

## Development

```sh
make dev
```
