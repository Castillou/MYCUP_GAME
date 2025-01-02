const { hash } = require('bcryptjs');
const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readUserData, writeUserData } = require('./util');
const User = require('../models/user');

async function add(data) {
	const users = await readUserData();
	const userId = generateId();
	const hashedPw = await hash(data.password, 12);
	if (!users) {
		users = [];
	}
	const newUser = { ...data, password: hashedPw, id: userId };
	users.push(newUser);

	// mongodb에 데이터 저장
	// const dbUsers = new User(newUser);
	// await dbUsers.save();

	// 로컬 json 파일에 데이터 저장
	await writeUserData(users);
	return { id: userId, email: data.email, username: data.username };
}

async function get(email) {
	const users = await readUserData();
	if (!users || users.length === 0) {
		throw new NotFoundError('Could not find any users.');
	}

	const user = users.find((ev) => ev.email === email);
	if (!user) {
		throw new NotFoundError('Could not find user for email ' + email);
	}

	return user;
}

async function replace(username, data) {
	const users = await readUserData();
	if (!users || users.length === 0) {
		throw new NotFoundError('Could not find any users.');
	}

	const user = users.find((ev) => ev.username === username);
	const index = users.findIndex((ev) => ev.username === username);
	if (index < 0) {
		throw new NotFoundError('Could not find user for username ' + username);
	}

	users[index] = { ...user, ...data };

	const { _id, ...updateData } = data;

	// mongoDB 데이터 업데이트
	// await User.findOneAndUpdate({ id: id }, updateData, { new: true });

	// 로컬 json 파일에 데이터 업데이트
	await writeUserData(users);
}

exports.add = add;
exports.get = get;
exports.replace = replace;
