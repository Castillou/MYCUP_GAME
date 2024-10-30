import { json, redirect } from 'react-router-dom';
import { getAuthToken } from './auth';

export async function action({ request }) {
	const data = await request.formData();

	const eventData = {
		title: data.get('title'),
		description: data.get('description'),
		date: '2024-10-26',
		image:
			'https://images.unsplash.com/photo-1713877184702-34141e5b299d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
	};
	console.log(eventData);

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
