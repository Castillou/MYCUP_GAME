import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 90vh;
	background-color: #fff;
`;
const Title = styled.h1`
	font-size: 2.4rem;
	margin-bottom: 2rem;
`;
const Input = styled.input`
	width: 20rem;
	padding: 1rem;
	margin: 1rem;
	border: 1px solid #ccc;
	border-radius: 0.4rem;
`;
const Button = styled.button`
	padding: 1rem 2rem;
	margin-top: 1rem;
	border: none;
	background-color: #007bff;
	color: white;
	cursor: pointer;
	border-radius: 0.4rem;

	&:hover {
		background-color: #0056b3;
	}
`;
const OptionList = styled.ul`
	list-style-type: none;
	padding: 0;
	margin-top: 2rem;
`;
const OptionItem = styled.li`
	margin: 0.5rem 0;
`;

export default function Home() {
	const [options, setOptions] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const handleAddOption = () => {
		if (inputValue.trim() !== '') {
			setOptions([...options, inputValue]);
			setInputValue('');
		}
	};

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<Container>
			<Title>WorldCup Game</Title>
			<Input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Enter an option"
			/>
			<Button onClick={handleAddOption}>Add Option</Button>

			<OptionList>
				{options.map((option, index) => (
					<OptionItem key={index}>{option}</OptionItem>
				))}
			</OptionList>
		</Container>
	);
}
