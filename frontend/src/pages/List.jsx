import { useRouteLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { loader as eventLoader } from '../util/loader/eventsLoader';
import AppContext from '../apis/appContext';

import ListContainer from '../compnents/List/ListContainer';
import LoadingSpinner from '../UI/LoadingSpinner';
// import ErrorBlock from '../UI/ErrorBlock';
import sampleData from '../../public/events.json';

const Wrapper = styled.section`
	width: 100%;
	padding: 3rem 5rem;
`;

export default function ListPage() {
	const token = useRouteLoaderData('root');

	const { data, isPending, isError } = useQuery({
		queryKey: ['events'],
		queryFn: eventLoader,
		// 이하 임시 데이터용 코드
		retry: 1,
		retryDelay: 100, // 재시도 간격 1초
		staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
	});

	let content;

	if (isPending) {
		content = <LoadingSpinner />;
	}

	if (isError) {
		// content = (
		// 	<ErrorBlock
		// 		title="An error occurred"
		// 		message={error.info?.message || 'Failed to fetch events'}
		// 	/>
		// );
		// 임시 데이터 사용
		content = <ListContainer events={sampleData} />;
	}

	if (data) {
		content = <ListContainer events={data} />;
	}

	return (
		<AppContext.Provider value={{ token }}>
			<Wrapper>{content}</Wrapper>
		</AppContext.Provider>
	);
}
