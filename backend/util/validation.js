function isValidText(value, minLength = 1) {
	return value && value.trim().length >= minLength;
}

function isValidDate(value) {
	const date = new Date(value);
	return value && date !== 'Invalid Date';
}

function isValidImages(value) {
	return Array.isArray(value) && value.length > 0;
}

function isValidEmail(value) {
	return value && value.includes('@');
}

exports.isValidText = isValidText;
exports.isValidDate = isValidDate;
exports.isValidImages = isValidImages;
exports.isValidEmail = isValidEmail;
