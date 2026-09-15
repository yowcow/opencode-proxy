# opencode-proxy

AnythingLLM 公式 Android アプリはカスタムヘッダー `x-opencode-session` を送れないため、
opencode Zen/Go (`https://opencode.ai/zen/go/v1`) に直接繋ぐと `400 MissingSessionID` で失敗する。
この Worker はそのヘッダーを自動付与する最小構成のプロキシ。

Worker 側で API キーは持たない。`Authorization` ヘッダーはクライアントから来たものをそのまま転送する。

## デプロイ

```sh
make login
make deploy
```

`make deploy` 後に発行される `https://xxx.workers.dev` を使う。

## AnythingLLM Mobile の設定

1. Generic OpenAI Compatible を選ぶ
2. Base URL に `https://xxx.workers.dev/v1` を設定する
3. API キーは AnythingLLM 側に入れる（Worker 側には置かない）

## 開発

```sh
make dev
```
