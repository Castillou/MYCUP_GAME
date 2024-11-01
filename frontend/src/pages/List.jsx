import { Suspense } from 'react';
import { useRouteLoaderData, Await } from 'react-router-dom';
import styled from 'styled-components';
import ListButtonComp from '../compnents/List/ListButtonComp';
import ListComp from '../compnents/List/ListComp';
import TokenContext from '../util/tokenContext';

const Wrapper = styled.section`
	width: 100%;
	height: 92vh;
	padding: 3rem 5rem;
	background-color: #f9f9f9;
`;

export default function ListPage() {
	const token = useRouteLoaderData('root');
	const { events } = useRouteLoaderData('list-root');

	return (
		<TokenContext.Provider value={token}>
			<Wrapper>
				<ListButtonComp />
				<Suspense
					fallback={
						<p style={{ textAlign: 'center', fontSize: '5rem' }}>로딩중...</p>
					}
				>
					<Await resolve={events}>
						{(LoadedEvents) => <ListComp events={LoadedEvents} />}
					</Await>
				</Suspense>
			</Wrapper>
		</TokenContext.Provider>
	);
}
