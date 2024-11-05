import styled from 'styled-components';
import InputRow from './InputRow';
import RadioRow from './RadioRow';
import ImageUpload from './ImageUpload';

const Container = styled.div`
	width: 100%;
	background-color: #fff;
	border-radius: 2rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
	padding: 2rem 3rem;
	font-size: 2rem;
	font-weight: 800;
	color: #2e93ff;
	border-bottom: 2px solid #efefef;
`;

const SubmitRow = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 0 3rem 2rem;
`;

const SubmitButton = styled.button`
	grid-column: 12/13;
	padding: 1rem 3rem;

	font-size: 1.8rem;
	font-weight: 800;
	color: #fff;

	border: none;
	border-radius: 5px;
	background-color: #2e93ff;

	cursor: pointer;

	&:hover {
		background-color: #56a8ff;
	}
`;

const INPUT_CONT = [
	{
		id: 'r1',
		label: '1) 제목',
		name: 'title',
		description:
			'이상형월드컵의 제목을 입력하세요. 예) 여자 아이돌 이상형월드컵, 남자연예인 이상형월드컵',
	},
	{
		id: 'r2',
		label: '2) 설명',
		name: 'description',
		description: '설명, 하고싶은 말 등을 자유롭게 쓰세요.',
	},
];

export default function UploadForm() {
	return (
		<Container>
			<Title>이상형 월드컵 기본정보</Title>
			{INPUT_CONT.map(({ id, name, label, description }) => (
				<InputRow
					key={id}
					name={name}
					label={label}
					description={description}
				/>
			))}
			<RadioRow label="3) 공개여부" />
			<ImageUpload />
			<SubmitRow className="submit-row">
				<SubmitButton type="submit">저장하기</SubmitButton>
			</SubmitRow>
		</Container>
	);
}
