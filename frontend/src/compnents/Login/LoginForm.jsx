import {
	Form,
	Link,
	useSearchParams,
	useActionData,
	useNavigation,
} from 'react-router-dom';
import styled from 'styled-components';
import classes from './LoginForm.module.css';
import { useState } from 'react';
import eye from '../../assets/eye.svg';
import eyeS from '../../assets/eye-slash.svg';

const Title = styled.h1`
	font-size: 6rem;
	font-weight: 900;
	text-align: center;
	padding-left: 1rem;
	margin-bottom: 4rem;
`;

const InputConatiner = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	margin-bottom: 2rem;
	position: relative;

	input {
		font-size: 2rem;
		padding: 1.7rem 2rem;
		border: 1px solid #ccc;
		border-radius: 5rem;

		&:focus {
			outline: 1.5px solid #2e93ff;

			+ span {
				display: block;
			}
		}
	}

	span {
		display: none;

		position: absolute;
		bottom: 1.45rem;
		right: 2rem;
		width: 3rem;
		height: 3rem;
	}
`;

const Button = styled.button`
	width: 100%;
	padding: 1.7rem;
	margin-bottom: 2rem;

	border: none;
	font-size: 2rem;

	background-color: #007bff;
	color: white;
	cursor: pointer;
	border-radius: 5rem;

	&:hover {
		background-color: #0e75e4;
	}
`;

const ToggleTxt = styled.span`
	display: block;
	text-align: center;
	font-size: 2rem;
	opacity: 0.7;

	cursor: pointer;

	a {
		margin-left: 1rem;
		text-decoration: underline;
		color: #0056b3;
	}
`;

export default function LoginForm() {
	const data = useActionData();
	const navigation = useNavigation();

	const [showPassword, setShowPassword] = useState('password');
	const [icon, setIcon] = useState(eye);

	const [searchParams] = useSearchParams();
	const isLogin = searchParams.get('mode').includes('login');
	const isSignup = searchParams.get('mode').includes('signup');
	const isSubmitting = navigation.state === 'submitting';

	let buttonText;

	if (isLogin) {
		buttonText = '로그인';
	}
	if (isSignup) {
		buttonText = '가입하기';
	}

	const handleMouseOver = () => {
		setIcon(eyeS);
		setShowPassword('text');
	};
	const handleMouseOut = () => {
		setIcon(eye);
		setShowPassword('password');
	};

	return (
		<>
			<Form method="post" className={classes.form}>
				<Title>{isLogin ? 'LOG IN' : 'Create an account'}</Title>
				{data && data.errors && (
					<ul>
						{Object.values(data.errors).map((err) => (
							<li key={err}>{err}</li>
						))}
					</ul>
				)}
				{data && data.message && <p>{data.message}</p>}
				<InputConatiner>
					{isSignup && (
						<input
							id="username"
							type="username"
							name="username"
							placeholder="이름"
							required
						/>
					)}
					<input
						id="email"
						type="email"
						name="email"
						placeholder="이메일"
						required
					/>
					<input
						id="password"
						type={showPassword}
						name="password"
						placeholder="비밀번호"
						required
					/>
					<span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
						<img src={icon} alt="눈 아이콘" />
					</span>
				</InputConatiner>
				<Button disabled={isSubmitting}>
					{isSubmitting ? '로딩중...' : buttonText}
				</Button>
				<ToggleTxt>
					{isLogin ? '아직 회원이 아니신가요?' : '이미 계정이 있으신가요?'}
					<Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
						{isLogin ? '회원가입' : '로그인'}
					</Link>
				</ToggleTxt>
			</Form>
		</>
	);
}
