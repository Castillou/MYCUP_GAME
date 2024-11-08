import { Suspense } from 'react';
import { useRouteLoaderData, Await } from 'react-router-dom';
import styled from 'styled-components';
import ListButtons from '../compnents/List/ListButtons';
import ListContainer from '../compnents/List/ListContainer';
import TokenContext from '../apis/tokenContext';

import LoadingSpinner from '../compnents/Interface/LoadingSpinner';

const Wrapper = styled.section`
	width: 100%;
	padding: 11rem 5rem 3rem;
`;

export default function ListPage() {
	const token = useRouteLoaderData('root');
	const { events } = useRouteLoaderData('list-root');

	return (
		<TokenContext.Provider value={token}>
			<Wrapper>
				<ListButtons />
				<Suspense fallback={<LoadingSpinner />}>
					<Await resolve={events}>
						{(LoadedEvents) => <ListContainer events={LoadedEvents} />}
					</Await>
				</Suspense>
			</Wrapper>
		</TokenContext.Provider>
	);
}
