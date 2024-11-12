import { json, redirect } from 'react-router-dom';
import { getAuthToken } from '../auth';

export async function action({ request }) {
	const data = await request.formData();
	const id = data.get('id');
	const radio = data.get('group');
	const password = radio === 'friends' ? data.get('password') : null;

	const eventData = {
		title: data.get('title'),
		description: data.get('description'),
		date: new Date().toISOString(),
		radio,
		images: data.getAll('image'),
		username: localStorage.getItem('username'),
		...(password ? { password } : {}),
	};

	const token = getAuthToken();
	const response = await fetch(`http://localhost:8080/events/${id}`, {
		method: request.method,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(eventData),
	});

	if (!response.ok) {
		throw json({ message: '양식를 저장하지 못했습니다.' }, { status: 500 });
	}

	return redirect('/list');
}
