import styled from 'styled-components';
import trophy from '../assets/trophy-dynamic-premium.png';
import heart from '../assets/notify-heart-dynamic-premium.png';

import { Link } from 'react-router-dom';

const Container = styled.div`
	display: grid;
	grid-template-rows: repeat(7, 1fr);
	grid-template-columns: repeat(11, 1fr);
	width: 100%;
	height: 93vh;

	position: relative;

	h1 {
		grid-row: 2/4;
		grid-column: 2/8;
		color: #c1c1c1;

		font-size: 10rem;
		font-weight: 600;
		font-family: 'Audiowide', sans-serif;
		line-height: 1.2;

		strong {
			color: #333;
		}
	}

	p {
		grid-row: 4/5;
		grid-column: 2/6;
		padding-left: 0.5rem;

		font-size: 3rem;
	}
`;

const ImageBox = styled.div`
	grid-row: ${({ id }) => (id === 'trophy' ? '3 / 8' : '3 / 5')};
	grid-column: ${({ id }) => (id === 'trophy' ? '8 / -1' : '8 / 9')};
	margin-right: ${({ id }) => (id === 'trophy' ? '8rem' : '1.5rem')};
	transform: ${({ id }) => id === 'heart' && 'rotate(-15deg)'};

	img {
		width: 100%;
	}
`;
const StartButtonBox = styled.div`
	grid-row: 4/5;
	grid-column: 2/5;
	display: flex;
	align-items: flex-end;

	a {
		padding: 1.8rem 4rem;
		font-size: 2.3rem;
		background-color: #333;
		color: #f9f9f9;
		border-radius: 5rem;
	}

	a:hover {
		background-color: #555;
	}
`;

const BackSlice = styled.div`
	grid-row: 3/ -1;
	grid-column: 1/ -1;

	background: linear-gradient(45deg, #91a2ff 0%, #2948ff 100%);
	clip-path: polygon(0% 60%, 100% 10%, 100% 100%, 0% 100%);
	z-index: -10;
`;

export default function HomePage() {
	return (
		<Container>
			<h1>
				Welcome to <strong>MYCUP</strong> Game!
			</h1>
			<p>나만의 월드컵 게임을 만들어보세요!</p>
			<ImageBox id="trophy">
				<img src={trophy} alt="트로피 이미지" />
			</ImageBox>
			<ImageBox id="heart">
				<img src={heart} alt="트로피 이미지" />
			</ImageBox>
			<StartButtonBox>
				<Link to="/list">Get Started!</Link>
			</StartButtonBox>
			<BackSlice />
		</Container>
	);
}
