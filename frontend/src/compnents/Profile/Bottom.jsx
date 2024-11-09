import { Suspense } from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import OwnList from './OwnList';
import LoadingSpinner from '../Interface/LoadingSpinner';

const Wrapper = styled.section`
	width: 100%;
	min-height: 60rem;

	padding: 0 23rem;
	background-color: #fff;
`;

const ToggleList = styled.ul`
	padding-bottom: 1.5rem;
	border-bottom: 1px solid #e1e1e1;

	li {
		span {
			font-size: 2rem;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -1.5rem;

				width: 100%;
				height: 3px;

				background-color: #333;
			}
		}
	}
`;

export default function Bottom() {
	const { events } = useRouteLoaderData('user-root');

	return (
		<Wrapper>
			<ToggleList>
				<li>
					<span>MyGames</span>
				</li>
			</ToggleList>
			<Suspense fallback={<LoadingSpinner />}>
				<Await resolve={events}>
					{(LoadedEvents) => <OwnList events={LoadedEvents} />}
				</Await>
			</Suspense>
		</Wrapper>
	);
}
