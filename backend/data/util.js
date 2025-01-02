const fs = require('node:fs/promises');
// const Event = require('../models/event');
// const User = require('../models/user');

async function readUserData() {
	const data = await fs.readFile('users.json', 'utf8');
	return JSON.parse(data);

	// mongoDB에서 User 데이터 찾기
	// const dbUserData = await User.find();
	// return dbUserData;
}
async function readEventData() {
	const data = await fs.readFile('events.json', 'utf8');
	return JSON.parse(data);

	// mongoDB에서 Event 데이터 찾기
	// const dbEventData = await Event.find();
	// return dbEventData;
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
