const routeStorageWrite = require('./routeStorageWrite')
const routeStorageRead = require('./routeStorageRead')

async function write(routeName) {
	return await routeStorageWrite(routeName)
}

async function read(route, pathMap) {
	return await routeStorageRead(route, pathMap)
}

module.exports = {
	read,
	write,
}
