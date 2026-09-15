.PHONY: deploy dev login init

deploy:
	npx wrangler deploy

dev:
	npx wrangler dev

login:
	npx wrangler login

init:
	npm init -y && npm i -D wrangler
