const routeStorage = require('./routeStorage')
const log = require('./log')

const args = require('minimist')(process.argv.slice(2))

async function preExport(content) {
	try {
		await routeStorage.write(content)
	} catch (err) {
		log(err, 'error')
		log('\nPage pre-generation failed. Is server down?\n', 'error')
	}
}

if (args.contentTypes) {
	const array = eval(args.contentTypes)
	if (array) {
		array.forEach((content) => preExport(content))
	} else log('Invalid contentTypes array.\n', 'error')
} else log('No contentTypes defined.\n', 'error')
