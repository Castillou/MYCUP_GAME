import { getAuthToken } from '../auth';

export async function action({ id, newData, prevData }) {
	const radio = newData.get('group');
	const password = radio === 'friends' ? newData.get('password') : null;

	const newDataTemp = {
		title: newData.get('title'),
		description: newData.get('description'),
		date: new Date().toISOString(),
		radio,
		images: newData.getAll('image'),
		username: localStorage.getItem('username'),
		...(password ? { password } : {}),
	};

	const eventData = {
		...prevData,
		...newDataTemp,
	};

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
		const error = new Error('양식을 저장하지 못했습니다.');
		error.code = response.status;
		error.info = await response.json();
		throw error;
	}

	const { events } = await response.json();

	return events;
}
