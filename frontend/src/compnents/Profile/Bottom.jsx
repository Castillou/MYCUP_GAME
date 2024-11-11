import { Suspense, useState } from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import MyGames from './MyGames';
import Personal from './Personal';
import Friends from './Friends';
import TabButton from './TabButton';
import LoadingSpinner from '../Interface/LoadingSpinner';

const Wrapper = styled.section`
	width: 100%;
	min-height: 80rem;

	padding: 0 23rem;
	background-color: #fff;
`;

const ToggleList = styled.ul`
	display: flex;
	gap: 4rem;
	border-bottom: 1px solid #e1e1e1;

	li {
		padding-bottom: 1.5rem;
		cursor: pointer;

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

				background-color: transparent;
			}
		}
		&.active span::after {
			background-color: #333;
		}
	}
`;

const tabs = [
	{ id: 'myGames_tab', label: 'MyGames' },
	{ id: 'personal_tab', label: 'Personal' },
	{ id: 'friends_tab', label: 'Friends' },
];

export default function Bottom() {
	const { events } = useRouteLoaderData('user-root');
	const [clickedTab, setClickedTab] = useState('myGames_tab');

	const handleToggle = (e) => {
		setClickedTab(e.currentTarget.id);
	};

	return (
		<Wrapper>
			<ToggleList>
				{tabs.map((tab) => (
					<TabButton
						key={tab.id}
						id={tab.id}
						clickedTab={clickedTab}
						onClick={handleToggle}
					>
						{tab.label}
					</TabButton>
				))}
			</ToggleList>
			<Suspense fallback={<LoadingSpinner />}>
				<Await resolve={events}>
					{(LoadedEvents) => {
						if (clickedTab === 'myGames_tab') {
							return <MyGames events={LoadedEvents} />;
						} else if (clickedTab === 'personal_tab') {
							return <Personal events={LoadedEvents} />;
						} else if (clickedTab === 'friends_tab') {
							return <Friends events={LoadedEvents} />;
						}
					}}
				</Await>
			</Suspense>
		</Wrapper>
	);
}
