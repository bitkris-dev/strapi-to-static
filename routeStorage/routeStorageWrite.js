const rimraf = require('rimraf')
const fse = require('fs-extra')

const fetcher = require('../fetcher')
const log = require('../log')

const args = require('../config')

module.exports = async (routeName) => {
	// save json containing all the resources category
	const parsedName = routeName.split('-')[0]
	const filePath = `./${args.dir}/${parsedName}.json`

	try {
		let pages
		pages = await fetcher(parsedName)

		rimraf.sync('./data')

		fse
			.outputFile(filePath, JSON.stringify(pages))
			.then(() => {
				log(`File in "${filePath}" created successfully.`, 'success') // => hello!
			})
			.catch((err) => {
				log(`File in "${filePath}" returned error: ${err}`, 'error') // => hello!
			})
	} catch (err) {
		log(err, 'error')
		console.log('-------------')
		log(
			`Trying to generate page category "${routeName}", but it seems the server is down or the resource is unreachable.`,
			'error'
		)
		return
	}
}
