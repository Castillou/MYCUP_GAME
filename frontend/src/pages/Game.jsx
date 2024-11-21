import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import OptionBox from '../compnents/Game/OptionBox';
import LoadingSpinner from '../compnents/Interface/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import { loader as eventLoader } from '../util/loader/eventsLoader';

const Wrapper = styled.section`
	width: 100%;
	padding: 0 5rem;
`;

export default function GamePage() {
	const gameId = useParams.gameId;

	const { data, isPending } = useQuery({
		queryKey: ['events', gameId],
		queryFn: eventLoader,
	});

	let content;

	if (isPending) {
		content = <LoadingSpinner />;
	}

	if (data) {
		content = <OptionBox events={data} />;
	}

	return <Wrapper>{content}</Wrapper>;
}
