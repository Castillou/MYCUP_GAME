import { json, redirect } from 'react-router-dom';

export async function userEditAction({ request, params }) {
	const data = await request.formData();

	const userData = {
		username: data.get('username'),
		description: data.get('description'),
		userImage: data.get('user-image'),
	};

	const response = await fetch(`http://localhost:3000/${params.username}`, {
		method: 'patch',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});

	if (!response.ok) {
		throw json({ message: '정보를 수정하지 못했습니다.' }, { status: 500 });
	}

	return redirect(`/${params.username}/profile`);
}
