import styled from 'styled-components';

const Wrapper = styled.div`
	width: 103rem;
	margin: 0 auto 3rem;
	display: flex;
	gap: 3rem;

	div {
		width: 50rem;
		height: 50rem;
		background-color: #fff;
		border: 2px solid #86c1ff;
		border-radius: 3rem;

		display: flex;
		align-items: center;
		justify-content: center;

		span {
			font-size: 10rem;
		}
	}
`;

// eslint-disable-next-line react/prop-types
export default function VoteScore({ score }) {
	return (
		<Wrapper>
			<div>
				<span>{score[0]}</span>
			</div>
			<div>
				<span>{score[1]}</span>
			</div>
		</Wrapper>
	);
}
