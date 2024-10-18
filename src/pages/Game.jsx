import styled from 'styled-components';
import sin from '../assets/sin.jpg';
import jja from '../assets/jja.jpg';

import OptionComp from '../compnents/Game/OptionComp';
import { useState } from 'react';

const Wrapper = styled.section`
	width: 100%;
	height: 92vh;
	background-color: #f9f9f9;
`;
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
`;
const OptionBox = styled.section`
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

export default function GamePage() {
	const [clickedOption, setClickedOption] = useState();

	const handleClick = (id) => {
		setClickedOption(+id);
		console.log(clickedOption);
	};

	return (
		<Wrapper>
			<Title>2024년 라면 월드컵 (32강) - 1/16</Title>
			<OptionBox>
				<OptionComp
					id="1"
					src={sin}
					name="신라면"
					onClick={(e) => handleClick(e.target.id)}
					className={clickedOption === 2 && 'slide_left'}
				/>
				<Vstext className={clickedOption && 'hidden'}>VS</Vstext>
				<OptionComp
					id="2"
					src={jja}
					name="짜파게티"
					onClick={(e) => handleClick(e.target.id)}
					className={clickedOption === 1 && 'slide_right'}
				/>
			</OptionBox>
		</Wrapper>
	);
}
