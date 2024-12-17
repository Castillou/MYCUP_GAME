import styled from 'styled-components';
import ListItem from './ListItem';
import { useEffect, useState } from 'react';
import { useToken } from '../../apis/appContext';
import useInput from '../../hooks/useInput';

const ListSection = styled.section`
	width: 100%;
`;

const ItemContainer = styled.ul`
	list-style-type: none;
	width: 100%;
	gap: 2.3rem;
	display: flex;
	flex-wrap: wrap;
`;

const ButtonSection = styled.section`
	width: 100%;
	margin-bottom: 3rem;
	display: flex;
	gap: 3rem;
`;

const Container = styled.div`
	display: flex;
	gap: 1rem;

	input {
		width: 40rem;
		height: 5rem;
		padding: 0 2rem;
		border: 1px solid #efefef;
		font-size: 1.6rem;
		box-shadow: 0 0 2px rgba(5, 5, 5, 0.1);
		border-radius: 5rem;
	}

	button {
		height: 5rem;
		padding: 0 2rem;
		border: none;
		font-size: 1.6rem;
		background-color: #fff;
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
		border-radius: 5rem;
		cursor: pointer;

		transition: all 0.2s ease-in-out;

		&.active {
			background-color: #2e93ff;
			color: white;
			font-weight: 600;
		}
	}
`;

/* eslint-disable react/prop-types */
export default function ListContainer({ events }) {
	const token = useToken();
	const username = localStorage.getItem('username');

	const [clickedButton, setClickedButton] = useState('popular');
	const [inputValue, handleInput] = useInput('');
	const [games, setGames] = useState(events);

	useEffect(() => {
		let availableGames;
		if (!token) {
			availableGames = events.filter((item) => item.radio === 'public');
		} else {
			availableGames = events.filter((item) => {
				if (
					item.username === username ||
					item.radio === 'public' ||
					item.radio === 'friends'
				) {
					return item;
				}
			});
		}
		setGames(availableGames);
	}, [token, events, username]);

	const handleSortButton = (e) => {
		let buttonClass = e.target.className;
		if (buttonClass.startsWith('popular')) {
			setClickedButton('popular');
			let popularSorted = [...games].sort(
				(itemA, itemB) =>
					itemB.score[0] + itemB.score[1] - (itemA.score[0] + itemA.score[1])
			);
			setGames(popularSorted);
		}
		if (buttonClass.startsWith('recent')) {
			setClickedButton('recent');
			let recentSorted = [...games].sort(
				(itemA, itemB) =>
					new Date(itemB.startDate).getTime() -
					new Date(itemA.startDate).getTime()
			);
			console.log(recentSorted);
			setGames(recentSorted);
		}
	};

	const handleSearchGame = () => {
		let searchedGames = events.filter((item) =>
			item.title.includes(inputValue.trim())
		);
		setGames(searchedGames);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSearchGame();
		}
	};

	return (
		<ListSection>
			<ButtonSection>
				<Container>
					<button
						className={`popular ${clickedButton === 'popular' ? 'active' : ''}`}
						onClick={handleSortButton}
					>
						인기순
					</button>
					<button
						className={`recent ${clickedButton === 'recent' ? 'active' : ''}`}
						onClick={handleSortButton}
					>
						최신순
					</button>
				</Container>
				<Container>
					<input
						type="text"
						value={inputValue}
						onChange={handleInput}
						onKeyDown={handleKeyDown}
					/>
					<button onClick={handleSearchGame}>검색</button>
				</Container>
			</ButtonSection>
			<ItemContainer>
				{games.map((item) => (
					<ListItem
						key={item.id}
						id={item.id}
						img={item.images}
						title={item.title}
						description={item.description}
						radio={item.radio}
						name={item.username}
						password={item.password ?? ''}
					/>
				))}
			</ItemContainer>
		</ListSection>
	);
}
