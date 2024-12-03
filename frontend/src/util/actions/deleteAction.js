import { getAuthToken } from '../auth';

export async function action({ id }) {
	const token = getAuthToken();
	const response = await fetch(`http://localhost:8080/events/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		const error = new Error('게임을 삭제하지 못했습니다.');
		error.code = response.status;
		error.info = await response.json();
		throw error;
	}
}
