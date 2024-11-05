import styled from 'styled-components';

const FormRow = styled.div`
	padding: 2rem 3rem;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(3, 1fr);
	border-bottom: 1px dashed #d1d1d1;

	&.submit-row {
		grid-template-rows: repeat(2, 1fr);
	}
`;
const Label = styled.label`
	grid-row: 1/3;
	grid-column: 1/2;
	font-size: 2rem;
	font-weight: 700;
	line-height: 2.5;
	padding-left: 1rem;
`;
const Input = styled.input`
	grid-row: 1/3;
	grid-column: 2/13;
	font-size: 2rem;
	padding: 0 1.5rem;
	border-radius: 1rem;
	border: 1px solid #d1d1d1;

	&:focus {
		outline: 1px solid #2e93ff;
	}
`;
const Description = styled.span`
	grid-row: 3/4;
	grid-column: 2/8;
	font-size: 1.6rem;
	padding-top: 1rem;
	color: #808080;
`;

// eslint-disable-next-line react/prop-types
export default function InputRow({ name, label, description }) {
	return (
		<FormRow>
			<Label>{label}</Label>
			<Input type="text" name={name} required></Input>
			<Description>{description}</Description>
		</FormRow>
	);
}
