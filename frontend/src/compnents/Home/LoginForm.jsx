import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 50rem;
	padding: 8rem 5rem;
	border-radius: 2rem;
	background-color: #fff;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;
const Title = styled.h1`
	font-size: 5rem;
	font-weight: 700;
	margin-bottom: 4rem;
	text-align: center;
`;
const Input = styled.input`
	font-size: 2rem;
	padding: 1rem 2rem;
	margin: 1rem 0;
	border: 1px solid #ccc;
	border-radius: 0.5rem;
`;
const Button = styled.button`
	font-size: 2rem;
	padding: 1rem 2rem;
	margin-top: 1rem;
	border: none;
	background-color: #007bff;
	color: white;
	cursor: pointer;
	border-radius: 0.4rem;

	&:hover {
		background-color: #0056b3;
	}
`;

export default function LoginForm() {
	const [options, setOptions] = useState([
		{
			email: '',
			password: '',
		},
	]);
	const [inputEmail, setInputEmail] = useState('');
	const [inputPassword, setInputPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (inputEmail.trim() !== '' && inputPassword.trim().length > 6) {
			setOptions([{ ...options, email: inputEmail, password: inputPassword }]);
			setInputEmail('');
			setInputPassword('');
		}
	};

	const handleEmailChange = (event) => {
		setInputEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setInputPassword(event.target.value);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Title>Login</Title>
			<Input
				id="email"
				type="email"
				name="email"
				value={inputEmail}
				onChange={handleEmailChange}
				placeholder="이메일"
				required
			/>
			<Input
				id="password"
				type="password"
				name="password"
				value={inputPassword}
				onChange={handlePasswordChange}
				placeholder="비밀번호"
				required
			/>
			<Button>로그인</Button>
		</Form>
	);
}
