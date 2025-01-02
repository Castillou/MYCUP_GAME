const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbConnect');

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

const port = process.env.PORT || 8080;

// dbConnect();

app.listen(port, () => {
	console.log(`Server ready on port ${port}`);
});

module.exports = app;
