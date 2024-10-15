import styled from 'styled-components';
import sin from '../assets/sin.jpg';
import jja from '../assets/jja.jpg';

const Wrapper = styled.section`
	width: 100%;
	height: 92vh;
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
	background-color: #fff;
	display: flex;
	position: relative;
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
`;
const Option = styled.article`
	width: 50%;
	background-color: #333;
	position: relative;
	cursor: pointer;
`;
const ImgBox = styled.img`
	display: block;
	width: 100%;
	height: 84.5vh;
	object-fit: cover;
`;
const Name = styled.h2`
	position: absolute;
	width: 100%;
	bottom: 10rem;
	color: white;
	font-size: 5rem;
	text-align: center;
`;

export default function GamePage() {
	return (
		<Wrapper>
			<Title>2024년 라면 월드컵 (32강) - 1/16</Title>
			<OptionBox>
				<Option>
					<ImgBox src={sin} />
					<Name>신라면</Name>
				</Option>
				<Vstext>VS</Vstext>
				<Option>
					<ImgBox src={jja} />
					<Name>짜파게티</Name>
				</Option>
			</OptionBox>
		</Wrapper>
	);
}
