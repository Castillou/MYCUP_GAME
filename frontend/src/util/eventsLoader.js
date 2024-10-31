import { defer, json } from 'react-router-dom';

async function loadEvents() {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		throw json({ message: 'Could not fetch events.' }, { status: 500 });
	}

	const resData = await response.json();
	return resData.events;
}

export function loader() {
	return defer({
		events: loadEvents(),
	});
}
