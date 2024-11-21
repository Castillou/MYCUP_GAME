import styled from 'styled-components';

const Block = styled.div`
	margin: 2rem 0;
	padding: 2rem;
	border-radius: 1rem;
	color: #890b35;
	background-color: #f0d9e5;

	display: flex;
	gap: 2rem;
	align-items: center;
	text-align: left;
`;

const BlockIcon = styled.div`
	font-size: 3rem;
	width: 5rem;
	height: 5rem;
	color: #fff;
	background-color: #890b35;
	border-radius: 50%;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const BlockText = styled.div`
	h2 {
		color: inherit;
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.5rem;
		margin: 0;
	}
`;

// eslint-disable-next-line react/prop-types
export default function ErrorBlock({ title, message }) {
	return (
		<Block>
			<BlockIcon>!</BlockIcon>
			<BlockText>
				<h2>{title}</h2>
				<p>{message}</p>
			</BlockText>
		</Block>
	);
}
