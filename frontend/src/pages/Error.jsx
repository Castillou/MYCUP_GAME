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
	}

	p {
		font-size: 3rem;
	}
`;

export default function ErrorPage() {
	return (
		<Wrapper>
			<h1>Error occurred!</h1>
			<p>Something went wrong!</p>
		</Wrapper>
	);
}
