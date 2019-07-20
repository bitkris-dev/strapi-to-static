const colors = {
	red: '\x1b[31m',
	green: '\x1b[32m',
	cyan: '\u001b[36m.',
	white: '\x1b[0m',
}

const getColor = (color) => {
	return process.browser ? color : colors[color]
}

// a little logging color utility
module.exports = (msg, status) => {
	if (process.env.NODE_ENV === 'production') return

	const color =
		status === 'error'
			? getColor('red')
			: status === 'success'
			? getColor('green')
			: status === 'info'
			? getColor('cyan')
			: getColor('white')

	process.browser
		? console.log(`%c • ${msg}`, `color: ${color};`)
		: console.log(color, `• ${msg}`, colors.white)
}
