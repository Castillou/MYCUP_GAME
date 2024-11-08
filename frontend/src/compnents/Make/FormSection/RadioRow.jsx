import styled from 'styled-components';
import RadioOption from './RadioOption';

const Row = styled.div`
	padding: 2rem 3rem;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(3, 1fr);
	border-bottom: 1px dashed #d1d1d1;
`;
const Label = styled.label`
	grid-row: 1/3;
	grid-column: 1/2;
	font-size: 2rem;
	font-weight: 700;
	line-height: 2.5;
	padding-left: 1rem;
`;

const RadioContainer = styled.div`
	grid-row: 1/4;
	grid-column: 2/8;

	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 0.5rem 0;
`;

// eslint-disable-next-line react/prop-types
export default function RadioRow({ label }) {
	return (
		<Row>
			<Label>{label}</Label>
			<RadioContainer>
				<RadioOption
					id="r1"
					value="personal"
					text="비공개 (다른 사용자는 접근할 수 없습니다.)"
				/>
				<RadioOption
					id="r2"
					value="public"
					text="전체 공개 (모든 사용자가 플레이 할 수 있습니다.)"
				/>
				<RadioOption
					id="r3"
					value="friends"
					text="친구 공개 (비밀번호를 입력 후 플레이 할 수 있습니다.)"
				/>
			</RadioContainer>
		</Row>
	);
}
