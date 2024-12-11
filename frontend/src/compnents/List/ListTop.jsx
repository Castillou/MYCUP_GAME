import { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';

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

export default function ListTop() {
	const [clickedButton, setclickedButton] = useState('popular');
	const [inputValue, handleInput] = useInput('');

	const handleSortButton = (e) => {
		let buttonClass = e.target.className;
		if (buttonClass.startsWith('popular')) {
			setclickedButton('popular');
		}
		if (buttonClass.startsWith('recent')) {
			setclickedButton('recent');
		}
	};

	return (
		<ButtonSection>
			<Container>
				<button
					className={`popular${clickedButton === 'popular' && ' active'}`}
					onClick={handleSortButton}
				>
					인기순
				</button>
				<button
					className={`recent${clickedButton === 'recent' && ' active'}`}
					onClick={handleSortButton}
				>
					최신순
				</button>
			</Container>
			<Container>
				<input type="text" value={inputValue} onChange={handleInput} />
				<button>검색</button>
			</Container>
		</ButtonSection>
	);
}
