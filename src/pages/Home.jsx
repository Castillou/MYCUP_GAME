import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 90vh;
	background-color: #f9f9f9;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 50rem;
	padding: 8rem 5rem;
	border-radius: 2rem;
	background-color: #fff;
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

export default function HomePage() {
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
		<Container>
			<Form onSubmit={handleSubmit}>
				<Title>Login</Title>
				<Input
					type="email"
					value={inputEmail}
					onChange={handleEmailChange}
					placeholder="이메일"
				/>
				<Input
					type="password"
					value={inputPassword}
					onChange={handlePasswordChange}
					placeholder="비밀번호"
				/>
				<Button>로그인</Button>
			</Form>
		</Container>
	);
}
