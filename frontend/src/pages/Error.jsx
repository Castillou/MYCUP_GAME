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
	return (
		<Wrapper>
			<h1>잘못된 접근입니다!</h1>
			<p>사이트에 다시 접근해주세요.</p>
		</Wrapper>
	);
}
