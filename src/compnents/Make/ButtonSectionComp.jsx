import styled from 'styled-components';

const ButtonSection = styled.section`
	width: 100%;
	display: flex;
	gap: 3rem;
	border-bottom: 3px solid #e1e1e1;
`;

const ButtonBox = styled.div`
	display: flex;
`;

const Button = styled.button`
	padding: 2rem 3rem;
	border: none;
	font-size: 1.8rem;
	cursor: pointer;
	background-color: #f9f9f9;

	&.active {
		background-color: #2e93ff;
		color: #fff;
		font-weight: 800;
	}
	&:hover {
		opacity: 0.7;
	}

	&.submit-btn {
		width: 11rem;
		padding: 1rem 0;
		border-radius: 4px;
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
