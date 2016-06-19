[![Build Status](https://travis-ci.org/bang88/typescript-react-redux-starter.svg?branch=antd)](https://travis-ci.org/bang88/typescript-react-redux-starter)
[![Circle CI](https://circleci.com/gh/rangle/typescript-react-redux-starter.svg?style=svg)](https://circleci.com/gh/rangle/typescript-react-redux-starter)

# TypeScript/Antd/React/Redux Starter

Another react typescript starter kit build with love [ant-design](https://github.com/ant-design/ant-design) 

## npm scripts

### Dev
```bash
$ npm run dev
```

This runs a development mode server with live reload etc.

Open `http://localhost:8080` in your browser.

### Production

```bash
npm install
npm start
```

### Tests


#### Single Run
```bash
$ npm run test
```

#### Watch Files
```bash
$ npm run test:watch
```

#### Connecting to remote APIs

Both the devmode and production servers provide a way to proxy requests to
remote HTTP APIs.  This can be useful for working around CORS issues when
developing your software.

Edit [this file](server/proxy-config.js) to mount such APIs at a given path.

## License

Copyright (c) [bang88](//github.com/bang88)
Copyright (c) 2016 rangle.io

[MIT License][MIT]

[MIT]: ./LICENSE "Mit License"
