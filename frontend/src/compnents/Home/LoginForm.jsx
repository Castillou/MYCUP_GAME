import {
	Form,
	Link,
	useSearchParams,
	useActionData,
	useNavigation,
} from 'react-router-dom';
import styled from 'styled-components';
import classes from './LoginForm.module.css';

const Title = styled.h1`
	font-size: 4rem;
	font-weight: 700;
	text-align: center;
	margin-bottom: 2rem;
`;
const Input = styled.input`
	font-size: 2rem;
	padding: 1rem;
	border: 1px solid #ccc;
	border-radius: 0.5rem;
`;
const Button = styled.button`
	font-size: 2rem;
	padding: 1rem 2rem;
	border: none;
	background-color: #007bff;
	color: white;
	cursor: pointer;
	border-radius: 0.4rem;

	&:hover {
		background-color: #0056b3;
	}
`;
const CreateUser = styled.span`
	display: block;
	text-align: center;
	font-size: 1.6rem;
	opacity: 0.7;

	cursor: pointer;
`;

export default function LoginForm() {
	const data = useActionData();
	const navigation = useNavigation();

	const [searchParams] = useSearchParams();
	const isLogin = searchParams.get('mode') === 'login';
	const isSubmitting = navigation.state === 'submitting';

	return (
		<>
			<Form method="post" className={classes.form}>
				<Title>{isLogin ? 'LOG IN' : '회원가입'}</Title>
				{data && data.errors && (
					<ul>
						{Object.values(data.errors).map((err) => (
							<li key={err}>{err}</li>
						))}
					</ul>
				)}
				{data && data.message && <p>{data.message}</p>}
				<Input
					id="email"
					type="email"
					name="email"
					placeholder="이메일"
					required
				/>
				<Input
					id="password"
					type="password"
					name="password"
					placeholder="비밀번호"
					required
				/>
				<Button disabled={isSubmitting}>
					{isSubmitting ? '생성중...' : '로그인'}
				</Button>
				<CreateUser>
					<Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
						{isLogin ? '새 계정 만들기' : '로그인하기'}
					</Link>
				</CreateUser>
			</Form>
		</>
	);
}
