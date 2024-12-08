export function isValidEmail(emailInput) {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailInput.trim() !== '' && emailRegex.test(emailInput);
}

export function isValidPassword(passwordInput) {
	return passwordInput && passwordInput.length >= 6;
}
