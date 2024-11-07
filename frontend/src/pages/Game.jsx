import { Suspense } from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import styled from 'styled-components';

import OptionBox from '../compnents/Game/OptionBox';
import LoadingSpinner from '../compnents/Interface/LoadingSpinner';

const Wrapper = styled.section`
	width: 100%;
	padding: 8rem 5rem 0;
`;

export default function GamePage() {
	const { events } = useRouteLoaderData('list-root');

	return (
		<Wrapper>
			<Suspense fallback={<LoadingSpinner />}>
				<Await resolve={events}>
					{(LoadedEvents) => <OptionBox events={LoadedEvents} />}
				</Await>
			</Suspense>
		</Wrapper>
	);
}
