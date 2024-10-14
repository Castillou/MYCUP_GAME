import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 5rem;
	background-color: #007bff;
	height: 10vh;
	width: 100%;
	color: white;
`;
const NavList = styled.ul`
	display: flex;
	list-style-type: none;
	gap: 5rem;
`;

const Logo = styled.h1`
	a {
		font-weight: 900;
		font-size: 3rem;
		color: #ffc000;
	}
`;
const NavItem = styled.li`
	display: flex;
	align-items: center;

	a {
		font-size: 2rem;
	}

	a:hover {
		color: #ffc000;
	}
`;
const LoginButton = styled.button`
	padding: 1rem 2rem;
	font-size: 1.5rem;
	border: none;
	background-color: white;
	cursor: pointer;
	border-radius: 3rem;

	&:hover {
		background-color: #efefef;
	}
`;

export default function MainNavigation() {
	return (
		<Nav>
			<NavList>
				<Logo>
					<Link to="/">WorldCup</Link>
				</Logo>
				<NavItem>
					<Link to="/list">월드컵 목록</Link>
				</NavItem>
				<NavItem>
					<Link to="/">나만의 월드컵 만들기</Link>
				</NavItem>
			</NavList>
			<LoginButton>로그인</LoginButton>
		</Nav>
	);
}
