import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 5rem;
	background-color: #007bff;
	height: 8vh;
	width: 100%;
	color: white;

	z-index: 100;
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
		font-size: 1.8rem;
	}

	a:hover {
		color: #ffc000;
	}
`;
const LoginButton = styled.button`
	font-size: 2rem;
	line-height: 1;
	border: none;
	background: none;
	color: white;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&:hover {
		color: #e9e9e9;
	}

	svg {
		width: 2rem;
		height: 2rem;
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
					<Link to="/make">나만의 월드컵 만들기</Link>
				</NavItem>
			</NavList>
			<Link to="/auth">
				<LoginButton>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
						/>
					</svg>
					로그인
				</LoginButton>
			</Link>
		</Nav>
	);
}
