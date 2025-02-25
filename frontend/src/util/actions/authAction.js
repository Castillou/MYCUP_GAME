import { json, redirect } from 'react-router-dom';

export async function authAction({ request }) {
	const searchParams = new URL(request.url).searchParams;
	const mode = searchParams.get('mode') || 'login';

	if (mode !== 'login' && mode !== 'signup') {
		throw json({ message: '지원되지 않는 모드입니다.' }, { status: 422 });
	}

	const data = await request.formData();
	const authData = {
		username: data.get('username'),
		email: data.get('email'),
		password: data.get('password'),
	};

	const response = await fetch('http://localhost:8080/' + mode, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(authData),
	});

	if (response.status === 422 || response.status === 401) {
		return response;
	}

	if (!response.ok) {
		throw json({ message: '인증된 사용자가 아닙니다.' }, { status: 500 });
	}

	const resData = await response.json();
	const token = resData.token;
	const username = mode === 'login' ? resData.username : resData.user.username;

	localStorage.setItem('token', token);
	localStorage.setItem('username', username);
	const expiration = new Date();
	expiration.setHours(expiration.getHours() + 1);
	localStorage.setItem('expiration', expiration.toISOString());

	return redirect('/list');
}

export default authAction;
