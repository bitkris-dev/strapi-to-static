const fetch = require('node-fetch')
const log = require('./log')

const args = require('./config')

module.exports = async (category, idOrSlug) => {
	let data
	let json

	const urlBase = `${args.apiURL}/${category}`
	const urlWithID = `${urlBase}/${idOrSlug}`
	const url = idOrSlug ? urlWithID : urlBase

	const res = await fetch(url)
	json = await res.json()
	data = json

	const msgResource = `Page data fetched. Count: ${data.length}`
	const msgWithID = `Page "${data[0].title || ''}" fetched.`
	const msg = idOrSlug ? msgWithID : msgResource
	log(`${msg} <== ${url}`, 'success')

	return data
}
