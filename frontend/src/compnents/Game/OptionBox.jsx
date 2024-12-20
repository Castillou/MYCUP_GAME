import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import styled from 'styled-components';

import OptionComp from './OptionComp';
import voteAction from '../../util/voteAction';
import { queryClient } from '../../util/loader/eventsLoader';

const Title = styled.h2`
	width: 100%;
	padding: 3rem 0;
	color: #333;
	font-size: 4rem;
	font-weight: 800;
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;

	button {
		position: absolute;
		top: 50%;
		right: 2rem;
		transform: translateY(-50%);
		font-size: 1.8rem;
		font-weight: 500;
		background-color: #dfdfdf;
		color: #333;
		border: none;
		padding: 1rem 2rem;
		border-radius: 4rem;
	}
`;

const OptionList = styled.section`
	width: 100%;
	padding: 1rem 1rem;

	display: flex;
	justify-content: center;
	gap: 5rem;

	overflow-x: hidden;
	position: relative;
`;

const Vstext = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;

	font-size: 10rem;
	font-weight: 900;
	color: white;
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);

	transition: opacity 0.2s ease-in-out;

	&.hidden {
		opacity: 0;
	}
`;

/* eslint-disable react/prop-types */
export default function OptionBox({ events }) {
	const navigate = useNavigate();
	const username = localStorage.getItem('username');
	const gameId = useParams().gameId;
	const gameData = events.filter((item) => item.id === gameId)[0];
	const [clickedOption, setClickedOption] = useState(null);

	const { mutate } = useMutation({
		mutationFn: voteAction,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['event', gameId] });
		},
	});

	const handleClick = (id) => {
		const optionNumber = Number(id) - 1;
		setClickedOption(optionNumber);

		setTimeout(() => {
			if (username) {
				mutate({
					optionNumber: optionNumber,
					id: gameId,
					data: gameData,
				});
			}
			navigate(`/list/${gameId}/vote`);
		}, 2000);
	};

	return (
		<>
			<Title>
				{`${gameData.title}`}
				<button onClick={() => navigate(-1)}>Back</button>
			</Title>
			<OptionList>
				<OptionComp
					id="1"
					src={gameData.images[0]}
					name="1번"
					onClick={(e) => handleClick(e.target.id)}
					className={clickedOption === 1 && 'slide_left'}
				/>
				<Vstext className={clickedOption !== null && 'hidden'}>VS</Vstext>
				<OptionComp
					id="2"
					src={gameData.images[1]}
					name="2번"
					onClick={(e) => handleClick(e.target.id)}
					className={clickedOption === 0 && 'slide_right'}
				/>
			</OptionList>
		</>
	);
}
