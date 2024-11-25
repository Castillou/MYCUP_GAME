export async function action({ username, data }) {
	const userData = {
		username: data.get('new_username'),
		description: data.get('new_description'),
		userImage: data.get('new_userimage').name,
	};
	console.log(userData);

	const response = await fetch(`http://localhost:8080/${username}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});

	if (!response.ok) {
		const error = new Error('사용자 정보를 수정하는데 실패했습니다.');
		error.code = response.status;
		error.info = await response.json();
		throw error;
	}

	const { user } = await response.json();

	return user;
}
