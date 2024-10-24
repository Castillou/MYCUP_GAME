import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 92vh;
	background-color: #f9f9f9;
`;

export default function HomePage() {
	return <Container></Container>;
}
