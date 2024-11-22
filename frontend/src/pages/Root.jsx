import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import styled from 'styled-components';
import { getTokenDuration } from '../util/auth';
import MainNavigation from '../compnents/Interface/MainNavigation';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	max-width: 192rem;
	margin: 0 auto;

	@media screen and (max-width: 1919px) {
		max-width: 155rem;
	}
`;
const Header = styled.header`
	width: 100%;
	backdrop-filter: blur(50px);

	position: sticky;
	top: 0;
	z-index: 100;
`;

export default function RootLayout() {
	const token = useLoaderData();
	const submit = useSubmit();

	useEffect(() => {
		if (!token) {
			return;
		}

		if (token === 'EXPIRED') {
			submit(null, { action: '/logout', method: 'post' });
			return;
		}

		const tokenDuration = getTokenDuration();

		setTimeout(() => {
			submit(null, { action: '/logout', method: 'post' });
		}, tokenDuration);
	}, [token, submit]);

	return (
		<Wrapper>
			<Header>
				<MainNavigation />
			</Header>
			<Outlet />
		</Wrapper>
	);
}
