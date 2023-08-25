npx redocly bundle ./apiSpec/$1/openapi.yml -o ./apiSpec/bundled.yml
cd apiSpec/$1
npx asyncapi bundle asyncapi.yml >../asyncapi-bundled.yml
cd ../..
