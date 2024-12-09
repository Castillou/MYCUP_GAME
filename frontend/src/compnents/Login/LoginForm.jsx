import {
	Form,
	Link,
	useSearchParams,
	useActionData,
	useNavigation,
} from 'react-router-dom';
import styled from 'styled-components';
import classes from './LoginForm.module.css';
import useShowPassword from '../../hooks/useShowPassword';
import { isValidEmail, isValidPassword } from '../../util/validator';
import useInput from '../../hooks/useInput';
import { useEffect, useState } from 'react';

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
	gap: 1.5rem;

	margin-bottom: 2rem;
	position: relative;

	> input {
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

		&.invalid {
			border: 1px solid #fa4032;

			&:focus {
				outline: 1.5px solid #fa4032;

				+ span {
					display: block;
				}
			}

			+ p {
				padding-left: 1rem;
				font-size: 1.6rem;
				color: #fa4032;
			}
		}
	}

	> span {
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

	background-color: ${({ disabled }) => (disabled ? '#858585' : '#007bff')};
	color: white;
	cursor: pointer;
	border-radius: 5rem;

	&:hover {
		background-color: ${({ disabled }) => (disabled ? '#9b9b9b' : '#0e75e4')};
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
	const [searchParams] = useSearchParams();

	const [emailInput, handleEmailInput] = useInput('');
	const [passwordInput, handlePasswordInput] = useInput('');

	const [emailIsValid, handleEmailIsValid] = useState(true);
	const [passwordIsValid, handlePasswordIsValid] = useState();

	const [inputType, icon, handleShow, handleHide] = useShowPassword();

	const isLogin = searchParams.get('mode').includes('login');
	const isSignup = searchParams.get('mode').includes('signup');
	const isSubmitting = navigation.state === 'submitting';

	useEffect(() => {
		if (emailInput.trim() === '') {
			handleEmailIsValid(true);
		}
		if (emailInput.trim() !== '') {
			if (isValidEmail(emailInput)) {
				handleEmailIsValid(true);
			} else {
				handleEmailIsValid(false);
			}
		}
	}, [emailInput]);

	useEffect(() => {
		if (passwordInput.trim() === '') {
			handlePasswordIsValid(true);
		}
		if (passwordInput.trim() !== '') {
			if (isValidPassword(passwordInput)) {
				handlePasswordIsValid(true);
			} else {
				handlePasswordIsValid(false);
			}
		}
	}, [passwordInput]);

	let buttonText;

	if (isLogin) {
		buttonText = '로그인';
	}
	if (isSignup) {
		buttonText = '가입하기';
	}

	return (
		<>
			<Form method="post" className={classes.form}>
				<Title>{isLogin ? 'LOG IN' : 'Create an account'}</Title>

				<InputConatiner>
					{data && data.errors && (
						<ul>
							{Object.values(data.errors).map((err) => (
								<li key={err}>{err}</li>
							))}
						</ul>
					)}
					{data && data.message && <p>{data.message}</p>}
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
						className={!emailIsValid ? 'invalid' : ''}
						placeholder="이메일"
						value={emailInput}
						onChange={handleEmailInput}
						required
					/>
					{!emailIsValid && <p>✓ 아이디는 이메일 형식이어야 합니다.</p>}
					<input
						id="password"
						type={inputType}
						name="password"
						className={!passwordIsValid ? 'invalid' : ''}
						placeholder="비밀번호"
						value={passwordInput}
						onChange={handlePasswordInput}
						required
					/>
					{!passwordIsValid && (
						<p>✓ 비밀번호는 최소 6자리 이상이어야 합니다.</p>
					)}
					<span onMouseOver={handleShow} onMouseOut={handleHide}>
						<img src={icon} alt="눈 아이콘" />
					</span>
				</InputConatiner>
				<Button disabled={!emailIsValid || !passwordIsValid || isSubmitting}>
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
