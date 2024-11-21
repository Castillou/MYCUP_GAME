import { json } from 'react-router-dom';
import { getAuthToken } from './auth';

export default async function voteAction({ optionNumber, id, data }) {
	const eventData = {
		...data,
	};

	eventData.score[optionNumber] += 1;

	const token = getAuthToken();
	const response = await fetch(`http://localhost:8080/events/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(eventData),
	});

	if (!response.ok) {
		throw json({ message: 'Could not update vote' }, { status: 500 });
	}
}
