import styled from 'styled-components';
import LoginForm from '../compnents/Login/LoginForm';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 92vh;
	background-color: #f9f9f9;
`;

function LoginPage() {
	return (
		<Container>
			<LoginForm />
		</Container>
	);
}
export default LoginPage;
