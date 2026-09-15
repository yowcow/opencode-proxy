# opencode-proxy

The official AnythingLLM Android app cannot send the custom header `x-opencode-session`, so connecting directly to opencode Zen/Go fails with `400 MissingSessionID`. This Worker is a minimal proxy that adds the header automatically.

The Worker holds no API key. The `Authorization` header from the client is forwarded as-is.

## Deploy

```sh
make login
make deploy
```

Use the `https://xxx.workers.dev` URL issued after `make deploy`.

## AnythingLLM Mobile setup

1. Choose Generic OpenAI Compatible
2. Set Base URL to `https://xxx.workers.dev/zen/v1` for Zen or `https://xxx.workers.dev/zen/go/v1` for Go
3. Enter the API key in AnythingLLM (not in the Worker)

## Development

```sh
make dev
```
