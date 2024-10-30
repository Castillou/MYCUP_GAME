import styled from 'styled-components';
import InputRow from './InputRow';
import RadioRow from './RadioRow';
import ImageUpload from './ImageUpload';

const Container = styled.div`
	width: 100%;
	background-color: #fff;
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
	padding: 2rem 3rem;
	font-size: 2rem;
	font-weight: 800;
	color: #2e93ff;
	border-bottom: 2px solid #efefef;
`;

const FormRow = styled.div`
	padding: 0 3rem 2rem;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	border-bottom: 1px dashed #d1d1d1;

	&.submit-row {
		grid-template-rows: 1fr;
	}
`;

const Button = styled.button`
	border: none;
	font-size: 1.8rem;
	cursor: pointer;

	&.submit-btn {
		padding: 1rem 0;
		border-radius: 4px;
		grid-column: 12/13;
		background-color: #2e93ff;
		color: #fff;
		font-weight: 800;
	}

	&:hover {
		opacity: 0.7;
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
			<FormRow className="submit-row">
				<Button type="submit" className="submit-btn">
					저장하기
				</Button>
			</FormRow>
		</Container>
	);
}
