import styled from 'styled-components';
import { Await, useParams, useRouteLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingSpinner from '../compnents/Interface/LoadingSpinner';
import TopButtons from '../compnents/Make/TopButtons';
import EditForm from '../compnents/Edit/EditForm';

const Wrapper = styled.section`
	width: 100%;
	padding: 3rem 5rem;
`;

export default function EditPage() {
	const params = useParams().gameId;
	const { events } = useRouteLoaderData('user-root');

	return (
		<Wrapper>
			<TopButtons name="edit" />
			<Suspense fallback={<LoadingSpinner />}>
				<Await resolve={events}>
					{(LoadedEvents) => (
						<EditForm method="patch" id={params} events={LoadedEvents} />
					)}
				</Await>
			</Suspense>
			{/* <UploadForm method="patch" id={params} /> */}
		</Wrapper>
	);
}
