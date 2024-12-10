// require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const { PORT, MONGO_URI } = process.env;

const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
	next();
});

app.use(authRoutes);

app.use('/events', eventRoutes);

app.use((error, req, res, next) => {
	const status = error.status || 500;
	const message = error.message || 'Something went wrong.';
	res.status(status).json({ message: message });
});

const port = PORT || 8080;

mongoose
	.connect(
		'mongodb+srv://joajoa70584:9aVnLS8PldsAR3l7@cluster0.gjg2q.mongodb.net/'
	)
	.then((result) => {
		app.listen(port, () => {
			console.log(`Server ready on port ${port}`);
		});
	})
	.catch((err) => console.log(err));

module.exports = app;

// mongoose
// 	.connect(MONGO_URI)
// 	.then(() => console.log('Connected to MongoDB'))
// 	.catch((error) => console.error(error));
