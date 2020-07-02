# Quicklogger
A simple logger to be bundled in your webapp/library!

## Features
It now only has a basic log functionality, but I will add features when I need them. 

- [x] Basic loggers: log, debug, info, warn and error
- [x] Labels with colors to distinguish modules/parts of your code
- [x] Support for using sublabels with semicolon like this: `label:sublabel` where the color will be shared

A few things are already on the roadmap:

- [ ] Support for additional arguments
- [ ] Group debug logs when it has objects and arrays or multiple values (saving screen space)
- [ ] Enable logging based on query parameters and local storage
- [ ] Send logs to a server
- [ ] Give control over the logging to the user (ask for permission to send logs to server)
- [ ] CommonJS and UMD bundles

## Why built another logger?
I've created this module to log and debug front-end issues. There are many libraries out there, but most don't support bundling, especially with rollup, which I favor at the moment. I built my own small micro-library to get logging in my projects started right away. Also want the ability to log stuff to a server, but only after the user allows this!(which I will built in later)

## Install and usage
For now use npm install to get the package and bundle it with rollup (or any other bundler) or use it as a native module. 

Use import:
```js
import quicklogger from '@isirthijs/quicklogger'
```

### API

#### Create a logger
```js
// Normal label
const logger = quicklogger('mylabel');

// with sublabel
const logger2 = quicklogger('mylabel:mysublabel');
```

#### Using the logger
```js
logger.debug('Obligatory')
logger.info('Hello')
logger.error('World')
logger.warn('Hello')
logger.log('World')
```
