import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import OptionComp from './OptionComp';

const Title = styled.h2`
	width: 100%;
	height: 7.5vh;
	background-color: #222;
	color: #fff;
	font-size: 4rem;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;

	a {
		position: absolute;
		top: 50%;
		right: 5rem;
		transform: translateY(-50%);
		font-size: 2rem;
		background-color: #efefef;
		color: #333;
		padding: 1rem 2rem;
		border-radius: 4rem;
	}
`;

const OptionList = styled.section`
	width: 100%;
	background-color: #333;
	display: flex;
	justify-content: center;
	position: relative;
	overflow: hidden;
`;
const Vstext = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	font-size: 10rem;
	font-weight: 900;
	-webkit-text-stroke: 0.7rem #ffc000;
	z-index: 100;

	transition: opacity 0.2s ease-in-out;

	&.hidden {
		opacity: 0;
	}
`;

/* eslint-disable react/prop-types */
export default function OptionBox({ events }) {
	const params = useParams().gameId;
	console.log(events, params);

	const gameItem = events.filter((item) => item.id === params)[0];
	console.log(gameItem);

	const [clickedOption, setClickedOption] = useState();

	const handleClick = (id) => {
		setClickedOption(Number(id));
		console.log(clickedOption);
	};

	return (
		<>
			<Title>
				2024년 {gameItem.title} (32강) - 1/16 <Link to="/list">Back</Link>
			</Title>
			<OptionList>
				<OptionComp
					id="1"
					src={gameItem.images[0]}
					name="1번"
					onClick={(e) => handleClick(e.target.id)}
					className={clickedOption === 2 && 'slide_left'}
				/>
				<Vstext className={clickedOption && 'hidden'}>VS</Vstext>
				<OptionComp
					id="2"
					src={gameItem.images[1]}
					name="2번"
					onClick={(e) => handleClick(e.target.id)}
					className={clickedOption === 1 && 'slide_right'}
				/>
			</OptionList>
		</>
	);
}