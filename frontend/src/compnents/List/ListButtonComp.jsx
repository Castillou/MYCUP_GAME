import styled from 'styled-components';

const ButtonSection = styled.section`
	width: 100%;
	margin-bottom: 3rem;
	display: flex;
	gap: 3rem;
`;

const ButtonBox = styled.div`
	display: flex;
`;

const Button = styled.button`
	height: 5rem;
	padding: 0 2rem;
	border: none;
	font-size: 1.6rem;
	background-color: #fff;
	border-radius: 5rem;
	cursor: pointer;

	&:not(:last-child) {
		border-right: 1px solid #efefef;
	}

	&.active {
		background-color: #2e93ff;
		color: white;
		font-weight: 600;
	}
	&:hover {
		opacity: 0.7;
	}
`;

export default function ListButtonComp() {
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
			{/* <ButtonBox>
				<Button className="active">전체</Button>
				<Button>이미지</Button>
				<Button>동영상</Button>
			</ButtonBox> */}
		</ButtonSection>
	);
}
