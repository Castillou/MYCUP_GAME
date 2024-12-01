import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { loader as eventLoader } from '../util/loader/eventsLoader';
import ErrorBlock from '../UI/ErrorBlock';
import LoadingSpinner from '../compnents/Interface/LoadingSpinner';
import VoteScore from '../compnents/Vote/VoteScore';
import VoteComment from '../compnents/Vote/VoteComment';

const Wrapper = styled.section`
	width: 100%;
	padding: 0 5rem;
`;

const Title = styled.h2`
	width: 100%;
	padding: 3rem 0;
	color: #333;
	font-size: 4rem;
	font-weight: 800;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function VoteDashboardPage() {
	const gameId = useParams().gameId;

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['event', gameId],
		queryFn: eventLoader,
	});

	let content;
	if (isPending) {
		content = <LoadingSpinner />;
	}

	if (isError) {
		content = (
			<ErrorBlock
				title="게임 정보를 가져오지 못했습니다."
				message={
					error.info?.message ||
					'정보를 가져오지 못했습니다. 잠시 후에 다시 시도해주세요.'
				}
			/>
		);
	}

	if (data) {
		const gameData = data.filter((item) => item.id === gameId)[0];
		content = (
			<>
				<Title>투표 현황</Title>
				<VoteScore score={gameData.score} />
				<VoteComment data={gameData} />
			</>
		);
	}

	return <Wrapper>{content}</Wrapper>;
}
