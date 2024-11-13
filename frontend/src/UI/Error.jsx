import { Link, useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import megaphone from '../assets/megaphone-dynamic-gradient.png';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	img {
		width: 15rem;
	}

	h2 {
		font-size: 3.5rem;
		font-weight: 800;
		margin-top: 2rem;
	}

	p {
		font-size: 2.3rem;
		color: #888;
	}

	button {
		border: none;
		border-radius: 0.5rem;
		background-color: #e1e1e1;
		margin-top: 2rem;
		font-size: 2rem;
		font-weight: 600;
		color: #333;
		padding: 1rem 2rem;
	}
`;

export default function ErrorPage() {
	const error = useRouteError();

	let title = '페이지를 찾을 수 없어요';
	let message = '올바른 주소를 입력했는지 다시 확인해주세요.';

	if (error.status === 500) {
		message = error.data.message;
	}

	if (error.status === 404) {
		title = 'Page not found';
		message = 'Please check that you have entered the correct address.';
	}

	return (
		<Wrapper>
			<img src={megaphone} alt="확성기 이미지" />
			<h2>{title}</h2>
			<p>{message}</p>
			<button>
				<Link to="/">홈으로 돌아가기</Link>
			</button>
		</Wrapper>
	);
}
