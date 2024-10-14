import styled from 'styled-components';

const Wrapper = styled.section`
	width: 100%;
	height: 90vh;
	padding: 4rem 5rem;
	background-color: #f9f9f9;
`;

const ButtonSection = styled.section`
	width: 100%;
	height: 5rem;
	margin-bottom: 3rem;
	display: flex;
	gap: 3rem;
`;

const ButtonBox = styled.div`
	display: flex;
`;

const Button = styled.button`
	padding: 0 2rem;
	border: none;
	font-size: 1.6rem;
	background-color: #fff;
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

const ListSection = styled.section`
	width: 100%;
	height: 70rem;
`;

const ListBox = styled.ul`
	list-style-type: none;
	width: 100%;
	gap: 2rem 5rem;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 30rem;
	background-color: #fff;
`;

const ImgBox = styled.div`
	width: 100%;
	height: 23rem;
	background-color: #efefef;
`;
const Label = styled.h2`
	font-weight: 600;
	padding: 2rem 2rem 0.8rem;
	font-size: 2rem;
`;
const Description = styled.p`
	padding: 0.5rem 2rem 1rem;
	font-size: 1.5rem;
	font-weight: 300;
`;

const ItemButtonBox = styled.div`
	padding: 0 2rem 1rem;
	display: flex;
`;
const ItemButton = styled.button`
	flex: 1;
	border: 1px solid #333;
	background: none;
	padding: 0.8rem 0;
	cursor: pointer;

	&:not(:first-child) {
		border-left: none;
	}

	&.active {
		border-color: #ff7b00;
		color: #ff7b00;
		font-weight: 600;
	}
	&:hover {
		background-color: #ff7b00;
		color: white;
	}
`;

const DUMMY_ITEM = [
	{
		id: 'w1',
		img: '',
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w2',
		img: '',
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w3',
		img: '',
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w4',
		img: '',
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w5',
		img: '',
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w6',
		img: '',
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w7',
		img: '',
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w8',
		img: '',
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w9',
		img: '',
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w10',
		img: '',
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
];

export default function ListPage() {
	return (
		<Wrapper>
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
				<ButtonBox>
					<Button className="active">전체</Button>
					<Button>이미지</Button>
					<Button>동영상</Button>
				</ButtonBox>
			</ButtonSection>
			<ListSection>
				<ListBox>
					{DUMMY_ITEM.map((item) => (
						<ListItem key={item.id}>
							<ImgBox>{item.img}</ImgBox>
							<Label>{item.label}</Label>
							<Description>{item.description}</Description>
							<ItemButtonBox>
								<ItemButton className="active">시작하기</ItemButton>
								<ItemButton>랭킹보기</ItemButton>
								<ItemButton>공유</ItemButton>
							</ItemButtonBox>
						</ListItem>
					))}
				</ListBox>
			</ListSection>
		</Wrapper>
	);
}
