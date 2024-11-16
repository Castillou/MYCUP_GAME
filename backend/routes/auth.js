const express = require('express');
const { add, get, replace } = require('../data/user');
const { createJSONToken, isValidPassword } = require('../util/auth');
const { isValidEmail, isValidText } = require('../util/validation');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
	const data = req.body;
	let errors = {};

	if (!isValidText(data.username)) {
		errors.username = 'Invalid user name. Must be at least 1 characters long.';
	}

	if (!isValidEmail(data.email)) {
		errors.email = 'Invalid email.';
	} else {
		try {
			const existingUser = await get(data.email);
			if (existingUser) {
				errors.email = 'Email exists already.';
			}
		} catch (error) {}
	}

	if (!isValidText(data.password, 6)) {
		errors.password = 'Invalid password. Must be at least 6 characters long.';
	}

	if (Object.keys(errors).length > 0) {
		return res.status(422).json({
			message: 'User signup failed due to validation errors.',
			errors,
		});
	}

	try {
		const createdUser = await add(data);
		const authToken = createJSONToken(createdUser.email);

		res.status(201).json({
			message: 'User created.',
			user: createdUser,
			token: authToken,
		});
	} catch (error) {
		next(error);
	}
});

router.post('/login', async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	let user;
	try {
		user = await get(email);
	} catch (error) {
		return res.status(401).json({ message: 'Authentication failed.' });
	}

	const pwIsValid = await isValidPassword(password, user.password);
	if (!pwIsValid) {
		return res.status(422).json({
			message: 'Invalid credentials.',
			errors: { credentials: 'Invalid email or password entered.' },
		});
	}

	const username = user.username;
	const token = createJSONToken(email);
	res.json({ token, username });
});

router.patch('/:username', async (req, res) => {
	const data = req.body;

	try {
		await replace(req.params.username, data);
		res.json({ message: 'User updated.', user: data });
	} catch (error) {
		return res.status(401).json({ message: 'Authentication failed.' });
	}
});

module.exports = router;
