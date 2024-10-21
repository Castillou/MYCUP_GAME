import styled from 'styled-components';
import RadioOption from './RadioOption';

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

const RadioBox = styled.div`
	grid-row: 1/4;
	grid-column: 2/8;
	margin-bottom: 1rem;
`;

const RADIO_CONT = [
	{
		id: 'b1',
		text: '비공개 (다른 사용자는 접근할 수 없습니다.)',
	},
	{
		id: 'b2',
		text: '전체 공개 (모든 사용자가 플레이 할 수 있습니다.)',
	},
	{
		id: 'b3',
		text: '친구 공개 (비밀번호를 입력 후 플레이 할 수 있습니다.)',
	},
];

// eslint-disable-next-line react/prop-types
export default function RadioRow({ label }) {
	return (
		<FormRow>
			<Label>{label}</Label>
			<RadioBox>
				{RADIO_CONT.map(({ id, text }) => (
					<RadioOption key={id} text={text} />
				))}
			</RadioBox>
		</FormRow>
	);
}
