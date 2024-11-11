import { Suspense, useState } from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import MyGames from './MyGames';
import Personal from './Personal';
import Friends from './Friends';
import LoadingSpinner from '../Interface/LoadingSpinner';

const Wrapper = styled.section`
	width: 100%;
	min-height: 80rem;

	padding: 0 23rem;
	background-color: #fff;
`;

const ToggleList = styled.ul`
	display: flex;
	gap: 2rem;
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

export default function Bottom() {
	const { events } = useRouteLoaderData('user-root');
	const [clickedTab, setClickedTab] = useState('myGames_tab');

	const handleToggle = (e) => {
		console.log(e.currentTarget);
		setClickedTab(e.currentTarget.id);
	};

	return (
		<Wrapper>
			<ToggleList>
				<li
					id="myGames_tab"
					className={clickedTab === 'myGames_tab' ? 'active' : ''}
					onClick={handleToggle}
				>
					<span>MyGames</span>
				</li>
				<li
					id="personal_tab"
					className={clickedTab === 'personal_tab' ? 'active' : ''}
					onClick={handleToggle}
				>
					<span>Personal</span>
				</li>
				<li
					id="friends_tab"
					className={clickedTab === 'friends_tab' ? 'active' : ''}
					onClick={handleToggle}
				>
					<span>Friends</span>
				</li>
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
