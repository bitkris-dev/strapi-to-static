const { readFileSync } = require('fs')
const log = require('../log')

const args = require('../config')

module.exports = async (route, pathMap) => {
	const parsedName = route.name.split('-')[0]
	const filePath = `./data/${parsedName}.json`
	const hasToBeStored = args.contentTypes.indexOf(parsedName) > -1

	if (!hasToBeStored) {
		pathMap[route.name] = { page: route.page }
	} else {
		let pages

		try {
			pages = JSON.parse(readFileSync(filePath, 'utf8'))
			pathMap[route.name] = { page: route.page }

			if (pages.length) {
				pages.map((page) => {
					// when must generate the pathMap
					if (pathMap) {
						const key = page.slug || page.id

						let query = {}
						if (page.id) query.id = page.id
						if (page.slug) query.slug = page.slug

						pathMap[`/${parsedName}/${key}`] = {
							page: route.page,
							query,
						}
					}
				})
			}

			// console.log('((((((((((((((')
			// console.log(pathMap)
			// console.log('((((((((((((((')
			return pathMap
		} catch (err) {
			log(`Trying to read "${filePath}", but something went wrong.`, 'error')
			log(err, 'error')
			return
		}
	}
}
