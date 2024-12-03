import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import InputRow from '../Make/FormSection/InputRow';
import RadioRow from '../Make/FormSection/RadioRow';
import ImageUpload from '../Make/FormSection/ImageUpload';
import classes from '../Make/UploadForm.module.css';
import { useMutation } from '@tanstack/react-query';
import { action as editAction } from '../../util/actions/editAction';
import { queryClient } from '../../util/loader/eventsLoader';

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
	gap: 2rem;

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

		&.back {
			background-color: #c1c1c1;

			&:hover {
				background-color: #d1d1d1;
			}
		}
	}
`;

/* eslint-disable react/prop-types */
export default function EditForm({ method, id, events }) {
	const navigate = useNavigate();
	const gameId = useParams().gameId;
	const item = events.filter((item) => item.id === id)[0];

	const { mutate } = useMutation({
		mutationFn: editAction,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['events'] });
			navigate(-1);
		},
	});

	const handleEditDataSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		mutate({ id: gameId, newData: formData, prevData: item });
	};

	const handleRedirectBeforePage = () => {
		navigate(-1);
	};

	return (
		<form
			method={method}
			onSubmit={handleEditDataSubmit}
			className={classes.upload_form}
		>
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
			<RadioRow label="3) 공개여부" initialValue={item.radio} />
			<ImageUpload initialValue={item.images} />
			<SubmitRow className="submit-row">
				<button className="back" onClick={handleRedirectBeforePage}>
					취소하기
				</button>
				<button type="submit">수정하기</button>
			</SubmitRow>
		</form>
	);
}
