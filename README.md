# Quicklogger
A simple logger to be bundled in your webapp/library!

## Features
It now only has a basic log functionality, but I will add features when I need them. 

- [x] Basic loggers: log, debug, info, warn and error
- [x] Labels with colours to distinguish modules/parts of your code
- [x] Support for using sub-labels with semicolon like this: `label:sublabel` where the colour will be shared
- [x] Support for additional arguments
- [x] Group debug logs when it has objects and arrays or multiple values (saving screen space)

A few things are already on the roadmap:

- [ ] Enable logging based on query parameters and local storage
- [ ] Send logs to a server
- [ ] Give control over the logging to the user (ask for permission to send logs to server)
- [ ] CommonJS and UMD bundles

### Why built another logger?
I've created this module to log and debug front-end issues. There are many libraries out there, but most don't support bundling, especially with rollup, which I favor at the moment. I built my own small micro-library to get logging in my projects started right away. Also want the ability to log stuff to a server, but only after the user allows this!(which I will built in later)

## Install
For now use npm install to get the package and bundle it with rollup (or any other bundler) or use it as a native module. 

Use import:
```js
import quicklogger from '@isirthijs/quicklogger'
```

## Basic Usage

### Create a logger
```js
// Normal label
const logger = quicklogger('mylabel');

// with sublabel
const logger2 = quicklogger('mylabel:mysublabel');
```

### Using the logger
```js

// Trace and logger both allow additional arguments to be passed. These will be displayed in collapsed groups
logger.trace('Message', '1234') // Trace needs an ID to add to the message (so you can group something)
logger.debug('Obligatory')

// These methods also allow to be passed additional arguments, but will pass it trough to their native function
logger.log('World')
logger.info('Hello')
logger.warn('Hello')

// Error only takes 1 argument!
logger.error('World')

```

## Full API
Full api will be added here soon