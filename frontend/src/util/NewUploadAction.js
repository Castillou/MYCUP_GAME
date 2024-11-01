import { json, redirect } from 'react-router-dom';
import { getAuthToken } from './auth';

export async function action({ request }) {
	const data = await request.formData();

	const eventData = {
		title: data.get('title'),
		description: data.get('description'),
		date: new Date().toISOString(),
		radio: data.get('group'),
		images: data.getAll('image'),
	};

	const token = getAuthToken();
	const response = await fetch('http://localhost:8080/events', {
		method: 'POST',
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
