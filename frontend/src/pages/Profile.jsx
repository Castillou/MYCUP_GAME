import styled from 'styled-components';
import Top from '../compnents/Profile/Top';
import Bottom from '../compnents/Profile/Bottom';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20rem;
	background-color: #fff;
`;

export default function ProfilePage() {
	return (
		<Container>
			<Top />
			<Bottom />
		</Container>
	);
}
