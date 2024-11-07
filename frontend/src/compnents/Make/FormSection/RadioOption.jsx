import styled from 'styled-components';

const RadioLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	padding: 0 2rem;

	cursor: pointer;
	width: 50rem;
	height: 5rem;
	position: relative;

	&::before {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		content: '';

		width: 100%;
		height: 5rem;
		transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		border-radius: 1rem;
		border: 2px solid transparent;
	}

	&:hover::before {
		transition: all 0.2s ease;
		background-color: #2e93ff13;
	}

	&:has(input:checked)::before {
		background-color: #5baaff13;
		border-color: #2e93ff;
		height: 50px;
	}
`;
const RadioInput = styled.input.attrs({ type: 'radio' })`
	background-color: #eee;
	appearance: none;
	width: 1.8rem;
	height: 1.8rem;
	margin: 0;
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;

	&:before {
		content: '';
		width: 6px;
		height: 6px;
		border-radius: 50%;
		transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
		background-color: #f9f9f9;
		transform: scale(0);
	}

	&:checked {
		background-color: #2e93ff;
	}

	&:checked::before {
		transform: scale(1);
	}
`;

const RadioText = styled.span`
	font-size: 1.8rem;
`;

// eslint-disable-next-line react/prop-types
export default function RadioOption({ value, text }) {
	return (
		<RadioLabel>
			<RadioInput name="group" value={value} required />
			<RadioText>{text}</RadioText>
		</RadioLabel>
	);
}
