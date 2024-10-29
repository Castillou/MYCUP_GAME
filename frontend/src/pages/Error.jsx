import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	h1 {
		font-size: 8rem;
		font-weight: 800;
	}

	p {
		font-size: 4rem;
	}
`;

export default function ErrorPage() {
	const error = useRouteError();

	let title = '잘못된 접근입니다!';
	let message = '사이트에 다시 접근해주세요.';

	if (error.status === 500) {
		message = error.data.message;
	}

	if (error.status === 404) {
		title = 'Not found!';
		message = 'Could not find resource or page.';
	}

	return (
		<Wrapper>
			<h1>{title}</h1>
			<p>{message}</p>
		</Wrapper>
	);
}
