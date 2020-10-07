export default function quickLogger(label){
	if(!Logger._instances) Logger._instances  = []
	
	let existingLogger = Logger._instances.find(_instance => _instance.label === label)
	if(existingLogger) return existingLogger
	
	let splitLabel = label.split(':')
	let color = undefined
	
	if(splitLabel.length > 1) {
		let existingLogger = Logger._instances.find(_instance => _instance.label === splitLabel[0])
		color = existingLogger ? existingLogger.color : randomColor()
	} else {
		color = randomColor()
	}

	let logger = new Logger(label, color)

	Logger._instances.push(logger)
	return logger
}


class Logger {
	constructor(label, color) {
		this.label = label
		this.color = color
		this.styledLabel = `%c[${label}]%c`
		this.styles = [`color: ${color}; font-weight: bold`, '']
	}
	
	trace(msg, id, ...args) {
		let styledLabel = `%c[${this.label}.${id}]%c`
		let finalMsg = `${styledLabel}  ${msg}`
		
		if (args.length > 0) {
			console.groupCollapsed('Trace Information')
			args.forEach((arg) => console.debug(arg))
			console.groupEnd()
		}
		
		return console.debug(finalMsg, ...this.styles)
	}
	
	debug(msg, ...args) {
		let finalMsg = `${this.styledLabel}  ${msg}`
		
		if (args.length > 0) {
			console.groupCollapsed('Debug Information')
			args.forEach((arg) => console.debug(arg))
			console.groupEnd()
		}
		return console.debug(finalMsg, ...this.styles)
	}
   
	log(msg, ...args) {
		let finalMsg = `${this.styledLabel}  ${msg}`
		return console.log(finalMsg, ...this.styles, ...args)
	}

	warn(msg, ...args) {
		let finalMsg = `${this.styledLabel}  ${msg}`
		return console.warn(finalMsg, ...this.styles, ...args)
	}
	
	error(msg) {
		let finalMsg = `${this.styledLabel}  ${msg}`
		return console.error(finalMsg, ...this.styles)
	}

	info(msg, ...args){
		let finalMsg = `${this.styledLabel}  ${msg}`
		return console.info(finalMsg, ...this.styles, ...args)
	}
	
}

const randomColor = (() => {
	let lastUsed = 0
	let colors = [
		'#F2777A',
		'#F99157',
		'#FFCC66',
		'#99CC99',
		'#66CCCC',
		'#6699CC',
		'#CC99CC'
	]

	return () => {
		lastUsed++
		return colors[lastUsed % colors.length]
	}

})()
