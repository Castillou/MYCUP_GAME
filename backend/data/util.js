const fs = require('node:fs/promises');

async function readUserData() {
	const data = await fs.readFile('users.json', 'utf8');
	return JSON.parse(data);
}
async function readEventData() {
	const data = await fs.readFile('events.json', 'utf8');
	return JSON.parse(data);
}

async function writeUserData(data) {
	await fs.writeFile('users.json', JSON.stringify(data));
}
async function writeEventData(data) {
	await fs.writeFile('events.json', JSON.stringify(data));
}

exports.readUserData = readUserData;
exports.readEventData = readEventData;
exports.writeUserData = writeUserData;
exports.writeEventData = writeEventData;
