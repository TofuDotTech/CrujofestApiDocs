npx redocly bundle ./docs/$1/openapi.yml -o ./docs/bundled.yml
cd docs/$1
npx asyncapi bundle asyncapi.yml >../asyncapi-bundled.yml
cd ../..
