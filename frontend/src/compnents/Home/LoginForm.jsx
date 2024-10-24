import { Link, useSearchParams } from 'react-router-dom';
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
	font-size: 4rem;
	font-weight: 700;
	margin-bottom: 4rem;
	text-align: center;
`;
const Input = styled.input`
	font-size: 2rem;
	padding: 1rem;
	margin: 1rem 0;
	border: 1px solid #ccc;
	border-radius: 0.5rem;
`;
const Button = styled.button`
	font-size: 2rem;
	padding: 1rem 2rem;
	margin: 1rem 0 2rem;
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
	const [searchParams] = useSearchParams();
	const isLogin = searchParams.get('mode') === 'login';

	return (
		<Form method="post">
			<Title>{isLogin ? 'LOG IN' : '회원가입'}</Title>
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
			<Button type="button">로그인</Button>
			<CreateUser>
				<Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
					{isLogin ? '새 계정 만들기' : '로그인하기'}
				</Link>
			</CreateUser>
		</Form>
	);
}
