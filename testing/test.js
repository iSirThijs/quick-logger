import quicklogger from '../index.mjs'

const logger = quicklogger('test')
const logger2 = quicklogger('test2')
const sublogger = quicklogger('test:sub')
const error = new Error('test error')


logger.trace('trace message', '1245')
logger.trace('trace message', {object: 'text'}, ['test', 'array'])

logger.debug('debug message')
logger.debug('debug message', {object: 'text'})
logger.debug('debug message', {object: 'text'}, ['test', 'array'])

logger.log('log message')
logger.log('log message', {object: 'text'})
logger.log('log message', {object: 'text'}, ['test', 'array'])

logger.info('info message')
logger.info('info message', {object: 'text'})
logger.info('info message', {object: 'text'}, ['test', 'array'])

logger.warn('warn message')
logger.warn('warn message', {object: 'text'})
logger.warn('warn message', {object: 'text'}, ['test', 'array'])


logger.error(error)

logger2.trace('trace message', '1245')
logger2.trace('trace message', '1245', {object: 'text'}, ['test', 'array'])

logger2.debug('debug message')
logger2.debug('debug message', {object: 'text'})
logger2.debug('debug message', {object: 'text'}, ['test', 'array'])

logger2.log('log message')
logger2.log('log message', {object: 'text'})
logger2.log('log message', {object: 'text'}, ['test', 'array'])

logger2.info('info message')
logger2.info('info message', {object: 'text'})
logger2.info('info message', {object: 'text'}, ['test', 'array'])

logger2.warn('warn message')
logger2.warn('warn message', {object: 'text'})
logger2.warn('warn message', {object: 'text'}, ['test', 'array'])

logger2.error('an error!', error)

sublogger.trace('trace message', '1245')
sublogger.trace('trace message', '1245', {object: 'text'}, ['test', 'array'])

sublogger.debug('debug message')
sublogger.debug('debug message', {object: 'text'})
sublogger.debug('debug message', {object: 'text'}, ['test', 'array'])

sublogger.log('log message')
sublogger.log('log message', {object: 'text'})
sublogger.log('log message', {object: 'text'}, ['test', 'array'])

sublogger.info('info message')
sublogger.info('info message', {object: 'text'})
sublogger.info('info message', {object: 'text'}, ['test', 'array'])

sublogger.warn('warn message')
sublogger.warn('warn message', {object: 'text'})
sublogger.warn('warn message', {object: 'text'}, ['test', 'array'])

sublogger.error('an error!', error)