import styled from 'styled-components';

const ButtonSection = styled.section`
	margin-bottom: 1.5rem;
`;

const ButtonBox = styled.div`
	display: flex;
	gap: 1rem;
`;

const Button = styled.button`
	padding: 1.5rem 3rem;
	border: none;
	border-radius: 5rem;
	font-size: 1.8rem;
	cursor: pointer;
	background-color: #fff;

	&.active {
		background-color: #2e93ff;
		color: #fff;
		font-weight: 800;
	}
	&:hover {
		background-color: #efefef;

		&.active {
			background-color: #56a8ff;
		}
	}

	&.submit-btn {
		width: 11rem;
		padding: 1rem 0;
		border-radius: 3rem;
		grid-column: 2/3;
		background-color: #2e93ff;
		color: #fff;
		font-weight: 800;
	}
`;

export default function ButtonSectionComp() {
	return (
		<ButtonSection>
			<ButtonBox>
				<Button className="active">1. 기본정보 수정 / 이미지 업로드</Button>
				<Button>2. 이미지 이름 수정 / 삭제</Button>
			</ButtonBox>
		</ButtonSection>
	);
}
