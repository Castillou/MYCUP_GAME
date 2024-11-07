import styled from 'styled-components';
import Top from '../compnents/Profile/Top';
import Bottom from '../compnents/Profile/Bottom';
import bg from '../assets/background.jpeg';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 28rem;

	background: url(${bg});
	background-size: 100%;
	background-position: bottom;
`;

export default function ProfilePage() {
	return (
		<Container>
			<Top />
			<Bottom />
		</Container>
	);
}
