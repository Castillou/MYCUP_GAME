import styled from 'styled-components';

const ButtonSection = styled.section`
	display: flex;
	gap: 1rem;
	margin-bottom: 1.5rem;
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

// eslint-disable-next-line react/prop-types
export default function TopButtons({ name }) {
	return (
		<ButtonSection>
			<Button className={name === 'make' && 'active'}>
				1. 기본정보 및 이미지 링크 입력
			</Button>
			<Button className={name === 'edit' && 'active'}>
				2. 기본정보 및 이미지 링크 수정
			</Button>
		</ButtonSection>
	);
}
