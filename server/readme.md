# JSON Mock server

## Requirements
  * Node.js 

## Config
You can change port or json file in [package.json](./package.json)
```json
{
  ...
   "scripts": {              ↙           ↙
    "server": "json-server db.json -p 5007"
  },
  ...
}
```

## Installation
```bash
npm i
```

## Launch
```bash
npm run server
```