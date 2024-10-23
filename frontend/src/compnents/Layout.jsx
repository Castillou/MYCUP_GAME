import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import MainNavigation from './MainNavigation';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	padding-top: 8vh;
`;
const Header = styled.header`
	width: 100%;
	position: fixed;
	top: 0;
`;

export default function Layout() {
	return (
		<Wrapper>
			<Header>
				<MainNavigation />
			</Header>
			<Outlet />
		</Wrapper>
	);
}
