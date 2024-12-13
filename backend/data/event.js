const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readEventData, writeEventData } = require('./util');

async function getAll() {
	const events = await readEventData();
	if (!events) {
		throw new NotFoundError('Could not find any events.');
	}
	return events;
}

async function get(id) {
	const events = await readEventData();
	if (!events || events.length === 0) {
		throw new NotFoundError('Could not find any events.');
	}

	const event = events.find((ev) => ev.id === id);
	if (!event) {
		throw new NotFoundError('Could not find event for id ' + id);
	}

	return event;
}

async function add(data) {
	const events = await readEventData();

	if (!events) {
		events = [];
	}

	events.unshift({ ...data, id: generateId() });
	await writeEventData(events);
}

async function replace(id, data) {
	const events = await readEventData();
	if (!events || events.length === 0) {
		throw new NotFoundError('Could not find any events.');
	}

	const index = events.findIndex((ev) => ev.id === id);
	if (index < 0) {
		throw new NotFoundError('Could not find event for id ' + id);
	}

	events[index] = { ...data, id };

	await writeEventData(events);
}

async function remove(id) {
	const events = await readEventData();
	const updatedData = events.filter((ev) => ev.id !== id);
	await writeEventData({ ...events, updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
