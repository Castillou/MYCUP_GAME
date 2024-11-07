import styled from 'styled-components';

const ButtonSection = styled.section`
	width: 100%;
	margin-bottom: 3rem;
	display: flex;
	gap: 3rem;
`;

const ButtonBox = styled.div`
	display: flex;
	gap: 1rem;
`;

const Button = styled.button`
	height: 5rem;
	padding: 0 2rem;
	border: none;
	font-size: 1.6rem;
	background-color: #fff;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
	border-radius: 5rem;
	cursor: pointer;

	&.active {
		background-color: #2e93ff;
		color: white;
		font-weight: 600;

		&:hover {
			background-color: #86c1ff;
		}
	}
	&:hover {
		background-color: #fcfcfc;
	}
`;

export default function ListButtons() {
	return (
		<ButtonSection>
			<ButtonBox>
				<Button className="active">인기순</Button>
				<Button>최신순</Button>
			</ButtonBox>
			<ButtonBox>
				<Button className="active">전체</Button>
				<Button>월</Button>
				<Button>주</Button>
				<Button>일</Button>
			</ButtonBox>
		</ButtonSection>
	);
}
