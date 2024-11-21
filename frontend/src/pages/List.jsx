import { useRouteLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { loader as eventLoader } from '../util/loader/eventsLoader';
import AppContext from '../apis/appContext';

import ListButtons from '../compnents/List/ListButtons';
import ListContainer from '../compnents/List/ListContainer';
import LoadingSpinner from '../compnents/Interface/LoadingSpinner';

const Wrapper = styled.section`
	width: 100%;
	padding: 3rem 5rem;
`;

export default function ListPage() {
	const token = useRouteLoaderData('root');

	const { data, isPending } = useQuery({
		queryKey: ['events'],
		queryFn: eventLoader,
	});

	let content;

	if (isPending) {
		content = <LoadingSpinner />;
	}

	if (data) {
		content = <ListContainer events={data} />;
	}

	return (
		<AppContext.Provider value={{ token }}>
			<Wrapper>
				<ListButtons />
				{content}
			</Wrapper>
		</AppContext.Provider>
	);
}
