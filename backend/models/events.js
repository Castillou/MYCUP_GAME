import mongoose from 'mongoose';

const { Schema } = mongoose;

const EventSchema = new Schema({
	title: String,
	description: String,
	startDate: { type: Date, default: Date.now },
	radio: String,
	images: [String],
	username: String,
	score: [0, 2],
	comments: [{ id: String, username: String, comment: String, date: Date }],
	id: String,
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;
