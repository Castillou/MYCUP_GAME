import { Suspense } from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import styled from 'styled-components';

import OptionBox from '../compnents/Game/OptionBox';

const Wrapper = styled.section`
	width: 100%;
	height: 92vh;
`;

export default function GamePage() {
	const { events } = useRouteLoaderData('list-root');

	return (
		<Wrapper>
			<Suspense
				fallback={
					<p style={{ textAlign: 'center', fontSize: '5rem' }}>로딩중...</p>
				}
			>
				<Await resolve={events}>
					{(LoadedEvents) => <OptionBox events={LoadedEvents} />}
				</Await>
			</Suspense>
		</Wrapper>
	);
}
