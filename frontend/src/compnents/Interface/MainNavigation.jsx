import { Form, Link, useRouteLoaderData } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 5rem;
	height: 8rem;
	width: 100%;
	color: white;
	position: relative;
	backdrop-filter: blur(50px);

	z-index: 100;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: calc(100% - 10rem);
		height: 1px;
		background-color: #d4d4d4;
	}
`;

const Logo = styled.h1`
	a {
		font-family: 'Audiowide', sans-serif;
		font-weight: 600;
		font-size: 3rem;
		background: linear-gradient(45deg, #2948ff 0%, #396afc 100%);
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

const NavList = styled.ul`
	display: flex;
	gap: 5rem;
	padding: 0.5rem;
	list-style-type: none;
`;

const NavItem = styled.li`
	color: #333;

	a {
		font-size: 1.8rem;
	}

	a:hover {
		color: #888;
	}
`;
const LoginoutButton = styled.button`
	font-size: 2rem;
	line-height: 1;
	border: none;
	background: none;
	color: #333;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&:hover {
		color: #888;
	}

	svg {
		width: 2rem;
		height: 2rem;
	}
`;

export default function MainNavigation() {
	const token = useRouteLoaderData('root');

	return (
		<Nav>
			<Logo>
				<Link to="/">MYCUP</Link>
			</Logo>
			<NavList>
				<NavItem>
					<Link to="list">월드컵 목록</Link>
				</NavItem>
				{token && (
					<>
						<NavItem>
							<Link to="make">나만의 월드컵 만들기</Link>
						</NavItem>
						<NavItem>
							<Link to="profile">마이페이지</Link>
						</NavItem>
					</>
				)}
			</NavList>
			<div>
				{!token ? (
					<Link to="auth?mode=login">
						<LoginoutButton>
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
						</LoginoutButton>
					</Link>
				) : (
					<Form action="logout" method="post">
						<LoginoutButton>
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
									d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
								/>
							</svg>
							로그아웃
						</LoginoutButton>
					</Form>
				)}
			</div>
		</Nav>
	);
}
