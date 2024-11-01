import styled from 'styled-components';

const RadioLabel = styled.label`
	padding: 1rem 0;
	display: flex;
	align-items: center;
	gap: 1rem;
`;
const RadioInput = styled.input.attrs({ type: 'radio' })`
	display: none;

	&:checked + span::before {
		opacity: 1;
	}
`;
const RadioIcon = styled.span`
	display: inline-block;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	border: 1px solid #333;

	position: relative;

	&::before {
		content: '';
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		position: absolute;
		background-color: #2e93ff;
		inset: 50% 0 0 50%;
		transform: translate(-50%, -50%);
		cursor: pointer;

		opacity: 0;
	}
`;
const RadioText = styled.span`
	font-size: 1.8rem;
`;

// eslint-disable-next-line react/prop-types
export default function RadioOption({ value, text }) {
	return (
		<RadioLabel>
			<RadioInput name="group" value={value} />
			<RadioIcon></RadioIcon>
			<RadioText>{text}</RadioText>
		</RadioLabel>
	);
}
