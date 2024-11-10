import styled from 'styled-components';
import userImage from '../../assets/user.svg';

const Wrapper = styled.section`
	width: 100%;
	padding: 0 22rem 4rem;
	background-color: #fff;
`;

const Inner = styled.article`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(12, 1fr);
	position: relative;

	background-color: #fff;

	h2 {
		grid-row: 1/2;
		grid-column: 4/8;
		margin-top: 6rem;

		font-family: 'Audiowide', sans-serif;
		font-weight: 600;
		font-size: 4rem;
	}

	p {
		grid-row: 2/3;
		grid-column: 4/7;
		margin-top: 1.2rem;

		font-size: 2rem;
		line-height: 1.3;
		color: #555;
	}
`;

const ImageBox = styled.article`
	position: absolute;
	left: 0;
	bottom: 0;

	grid-row: 1/-1;
	grid-column: 1/3;
	width: 30rem;
	height: 30rem;
	padding: 2rem;

	border-radius: 5rem;
	backdrop-filter: blur(50px);

	div {
		width: 100%;
		border-radius: 4rem;
		background-color: #eee;

		img {
			width: 100%;
			height: 26rem;
		}
	}
`;

export default function Top() {
	const username = localStorage.getItem('username');

	return (
		<Wrapper>
			<Inner>
				<ImageBox>
					<div>
						<img src={userImage} alt="프로필 이미지" />
					</div>
				</ImageBox>
				<h2>{username}</h2>
				<p>
					Web Publisher and FE Developer <br /> based in Seoul
				</p>
			</Inner>
		</Wrapper>
	);
}
