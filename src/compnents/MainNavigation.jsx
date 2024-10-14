import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 3rem;
	background-color: #007bff;
	height: 10vh;
	width: 100%;
	color: white;
`;
const NavList = styled.ul`
	display: flex;
	list-style-type: none;
	gap: 3rem;
`;

const Logo = styled.h1`
	a {
		font-weight: 900;
		font-size: 2rem;
		color: #ffa200;
	}
`;
const NavItem = styled.li`
	a {
		font-size: 1.6rem;
	}
`;
const LoginButton = styled.button`
	padding: 0.8rem 1.6rem;
	border: none;
	background-color: white;
	cursor: pointer;
	border-radius: 2rem;

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
					<Link to="/">월드컵 목록</Link>
				</NavItem>
				<NavItem>
					<Link to="/">나만의 월드컵 만들기</Link>
				</NavItem>
			</NavList>
			<LoginButton>로그인</LoginButton>
		</Nav>
	);
}
