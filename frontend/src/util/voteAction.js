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
		const error = new Error('투표 정보를 업데이트하지 못했습니다.');
		error.code = response.status;
		error.info = await response.json();
		throw error;
	}

	const { event } = await response.json();

	return event;
}
