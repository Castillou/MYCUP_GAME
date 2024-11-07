import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import styled from 'styled-components';
import MainNavigation from '../compnents/Interface/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util/auth';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Header = styled.header`
	width: 100%;
	position: fixed;
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
