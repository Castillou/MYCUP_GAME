import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 92vh;
	background-color: #f9f9f9;

	h1 {
		font-size: 6rem;
		font-weight: 700;
		margin-bottom: 2rem;
	}

	p {
		font-size: 3rem;
	}
`;

export default function HomePage() {
	return (
		<Container>
			<h1>Welcome!</h1>
			<p>나만의 월드컵 게임을 만들어보세요!</p>
		</Container>
	);
}
