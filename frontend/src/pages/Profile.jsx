import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 5rem;
`;

const Top = styled.section`
	width: 100%;
	padding: 0 70rem;
`;

const Inner = styled.article`
	padding: 3rem;
	border-radius: 4rem;

	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(5, 1fr);

	background-color: #fff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

	div {
		grid-row: 1/-1;
		grid-column: 1/3;
		width: 14rem;
		height: 14rem;
		margin-left: 2rem;

		border-radius: 7rem;
		background-color: #efefef;
	}

	h2 {
		grid-row: 1/2;
		grid-column: 3/6;
		margin-top: 3rem;
		margin-left: 1rem;

		font-family: 'Audiowide', sans-serif;
		font-weight: 600;
		font-size: 2.3rem;
	}

	p {
		grid-row: 2/3;
		grid-column: 3/6;
		margin-top: 1rem;
		margin-left: 1rem;

		font-size: 1.6rem;
		color: #888;
	}
`;

export default function ProfilePage() {
	const username = localStorage.getItem('username');

	return (
		<Container>
			<Top>
				<Inner>
					<div></div>
					<h2>{username.toUpperCase()}</h2>
					<p>Stay hungry, stay foolish.</p>
				</Inner>
			</Top>
		</Container>
	);
}
