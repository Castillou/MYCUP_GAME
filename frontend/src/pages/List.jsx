import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import styled from 'styled-components';
import ListButtonComp from '../compnents/List/ListButtonComp';
import ListComp from '../compnents/List/ListComp';

const Wrapper = styled.section`
	width: 100%;
	height: 92vh;
	padding: 3rem 5rem;
	background-color: #f9f9f9;
`;

export default function ListPage() {
	const { events } = useLoaderData();

	return (
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
	);
}
