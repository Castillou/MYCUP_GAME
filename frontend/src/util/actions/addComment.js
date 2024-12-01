import { getAuthToken } from '../auth';

export async function action({ id, username, comment, data }) {
	const eventData = {
		...data,
	};
	eventData.comment = [...eventData.comment, { id, username, comment }];

	const token = getAuthToken();
	const response = await fetch(`http://localhost:8080/events/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(eventData),
	});

	if (!response.ok) {
		const error = new Error('댓글을 업로드하는데 실패했습니다.');
		error.code = response.status;
		error.info = await response.json();
		throw error;
	}

	const { event } = await response.json();

	return event;
}
