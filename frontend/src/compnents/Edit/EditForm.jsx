import { Form } from 'react-router-dom';
import styled from 'styled-components';
import InputRow from '../Make/FormSection/InputRow';
import RadioRow from '../Make/FormSection/RadioRow';
import ImageUpload from '../Make/FormSection/ImageUpload';
import classes from '../Make/UploadForm.module.css';

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
	padding: 2rem 3rem 2rem;

	button {
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
	}
`;

/* eslint-disable react/prop-types */
export default function UploadForm({ method, id, events }) {
	const item = events.filter((item) => item.id === id)[0];

	return (
		<Form method={method} className={classes.upload_form}>
			<Title>이상형 월드컵 기본정보</Title>
			<InputRow
				id="r1"
				name="title"
				label="1) 제목"
				description="이상형월드컵의 제목을 입력하세요. 예) 여자 아이돌 이상형월드컵, 남자연예인 이상형월드컵"
				initialValue={item.title}
			/>
			<InputRow
				id="r2"
				name="description"
				label="2) 설명"
				description="설명, 하고싶은 말 등을 자유롭게 쓰세요."
				initialValue={item.description}
			/>
			<RadioRow label="3) 공개여부" />
			<ImageUpload initialValue={item.images} />
			<SubmitRow className="submit-row">
				<button type="submit">저장하기</button>
			</SubmitRow>
		</Form>
	);
}
