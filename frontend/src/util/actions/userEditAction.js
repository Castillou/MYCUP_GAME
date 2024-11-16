import { json, redirect } from 'react-router-dom';

export async function userEditAction({ request }) {
	const data = await request.formData();
	const username = data.get('username');

	const userData = {
		username,
		description: data.get('description'),
		userImage: data.get('user-image'),
	};

	const response = await fetch(`http://localhost:3000/${username}`, {
		method: 'patch',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});

	if (!response.ok) {
		throw json({ message: '정보를 수정하지 못했습니다.' }, { status: 500 });
	}

	return redirect(`/${username}/profile`);
}
