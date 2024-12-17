const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readEventData, writeEventData } = require('./util');
const Event = require('../models/event');

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

	const newEvent = { ...data, id: generateId() };
	events.unshift(newEvent);

	// mongodb에 Event 데이터 저장 로직 추가
	const dbEvent = new Event(newEvent);
	await dbEvent.save();

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

	const { _id, ...updateData } = data;
	await Event.findOneAndUpdate({ id: id }, updateData, { new: true });

	await writeEventData(events);
}

async function remove(id) {
	const events = await readEventData();
	await Event.deleteOne({ id });

	const updatedData = events.filter((ev) => ev.id !== id);
	await writeEventData({ ...events, updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
