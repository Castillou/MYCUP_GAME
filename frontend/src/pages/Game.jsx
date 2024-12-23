import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import OptionBox from '../compnents/Game/OptionBox';
import LoadingSpinner from '../UI/LoadingSpinner';
// import ErrorBlock from '../UI/ErrorBlock';
import { loader as eventLoader } from '../util/loader/eventsLoader';
import sampleData from '../../public/events.json';

const Wrapper = styled.section`
	width: 100%;
	padding: 0 5rem;
`;

export default function GamePage() {
	const gameId = useParams().gameId;

	const { data, isPending, isError } = useQuery({
		queryKey: ['events', gameId],
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
		content = <OptionBox events={sampleData} />;
	}

	if (data) {
		content = <OptionBox events={data} />;
	}

	return <Wrapper>{content}</Wrapper>;
}
