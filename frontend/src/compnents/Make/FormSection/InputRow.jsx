import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(3, 1fr);
	padding: 2rem 3rem;

	border-bottom: 1px dashed #d1d1d1;

	label {
		grid-row: 1/3;
		grid-column: 1/2;
		font-size: 2rem;
		font-weight: 700;
		line-height: 2.5;
		padding-left: 1rem;
	}

	input {
		grid-row: 1/3;
		grid-column: 2/13;
		font-size: 2rem;
		padding: 0 1.5rem;
		border-radius: 1rem;
		border: 1px solid #d1d1d1;

		&:focus {
			outline: 1px solid #2e93ff;
		}
	}

	span {
		grid-row: 3/4;
		grid-column: 2/8;
		font-size: 1.6rem;
		padding-top: 1rem;
		color: #808080;
	}
`;

/* eslint-disable react/prop-types */
const MemoizedInput = React.memo((props) => (
	<input type="text" {...props} required />
));

MemoizedInput.displayName = 'MemoizedInput';

export default function InputRow({
	id,
	name,
	label,
	description,
	initialValue = '',
}) {
	const [value, setValue] = useState(initialValue);

	const handleChange = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	return (
		<Row>
			<label htmlFor={id}>{label}</label>
			<MemoizedInput
				id={id}
				name={name}
				onChange={handleChange}
				value={value}
			/>
			<span>{description}</span>
		</Row>
	);
}
