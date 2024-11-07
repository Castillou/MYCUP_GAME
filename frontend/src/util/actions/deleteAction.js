import { json, redirect } from 'react-router-dom';
import { getAuthToken } from '../auth';

export async function action({ request }) {
	const data = await request.formData();
	const id = data.get('id');

	const token = getAuthToken();
	const response = await fetch(`http://localhost:8080/events/${id}`, {
		method: request.method,
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw json({ message: 'Could not delete it' }, { status: 500 });
	}

	return redirect('/list');
}
