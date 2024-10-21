import styled from 'styled-components';
import InputRow from './InputRow';
import RadioRow from './RadioRow';

const FormSection = styled.form`
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
	padding: 2rem 3rem;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	border-bottom: 1px dashed #d1d1d1;

	&.submit-row {
		grid-template-rows: repeat(2, 1fr);
	}
`;

const Button = styled.button`
	border: none;
	font-size: 1.8rem;
	cursor: pointer;

	&.submit-btn {
		width: 11rem;
		padding: 1rem 0;
		border-radius: 4px;
		grid-column: 2/3;
		background-color: #2e93ff;
		color: #fff;
		font-weight: 800;
	}

	&:hover {
		opacity: 0.7;
	}
`;

const Dropzone = styled.form`
	min-height: 14rem;
	border: 1px dashed #efefef;
	padding: 2rem;

	.dz-message {
		padding: 5rem 0;
		border: 2px solid #c9c9c9;
		text-align: center;
		font-size: 2rem;
		font-weight: 700;
		line-height: 1.5;
		color: #777;
	}
`;

const INPUT_CONT = [
	{
		id: 'r1',
		label: '1) 제목',
		description:
			'이상형월드컵의 제목을 입력하세요. 예) 여자 아이돌 이상형월드컵, 남자연예인 이상형월드컵',
	},
	{
		id: 'r2',
		label: '2) 설명',
		description: '설명, 하고싶은 말 등을 자유롭게 쓰세요.',
	},
];

export default function FormSectionComp() {
	return (
		<>
			<FormSection>
				<Title>이상형 월드컵 기본정보</Title>
				{INPUT_CONT.map(({ id, label, description }) => (
					<InputRow key={id} label={label} description={description} />
				))}
				<RadioRow label="3) 공개여부" />
				<FormRow className="submit-row">
					<Button type="submit" className="submit-btn">
						저장하기
					</Button>
				</FormRow>
			</FormSection>
			<FormSection>
				<Title>이상형 월드컵 이미지 업로드</Title>
				<Dropzone
					action="upload.php?uid=6qpbGP"
					className="dropzone dz-clickable"
					id="dropzoneForm"
				>
					<div className="dz-default dz-message">
						<span>
							Drop files here or click to upload.
							<br />
							여기 파일을 놓거나 클릭하여 업로드하세요.
						</span>
					</div>
				</Dropzone>
			</FormSection>
		</>
	);
}
