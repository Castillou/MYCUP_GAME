import { useRouteLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { loader as eventLoader } from '../util/loader/eventsLoader';
import AppContext from '../apis/appContext';

import ListTop from '../compnents/List/ListTop';
import ListContainer from '../compnents/List/ListContainer';
import LoadingSpinner from '../UI/LoadingSpinner';
import ErrorBlock from '../UI/ErrorBlock';

const Wrapper = styled.section`
	width: 100%;
	padding: 3rem 5rem;
`;

export default function ListPage() {
	const token = useRouteLoaderData('root');

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['events'],
		queryFn: eventLoader,
	});

	let content;

	if (isPending) {
		content = <LoadingSpinner />;
	}

	if (isError) {
		content = (
			<ErrorBlock
				title="An error occurred"
				message={error.info?.message || 'Failed to fetch events'}
			/>
		);
	}

	if (data) {
		content = <ListContainer events={data} />;
	}

	return (
		<AppContext.Provider value={{ token }}>
			<Wrapper>
				<ListTop />
				{content}
			</Wrapper>
		</AppContext.Provider>
	);
}
