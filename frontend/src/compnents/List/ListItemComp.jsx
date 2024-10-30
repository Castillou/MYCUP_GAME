import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled.li`
	width: 33rem;
	background-color: #fff;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const ImgBox = styled.div`
	width: 100%;
	background-color: #efefef;
	display: flex;
`;
const Img = styled.img`
	width: 50%;
	height: 23rem;
	object-fit: cover;
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

// eslint-disable-next-line react/prop-types
export default function ListItemComp({ id, img, label, description }) {
	return (
		<ListItem>
			<ImgBox>
				<Img src={img[0]} />
				<Img src={img[1]} />
			</ImgBox>
			<Label>{label}</Label>
			<Description>{description}</Description>
			<ItemButtonBox>
				<ItemButton className="active">
					<Link to={`/list/${id}`}>시작하기</Link>
				</ItemButton>
				<ItemButton>랭킹보기</ItemButton>
				<ItemButton>공유</ItemButton>
			</ItemButtonBox>
		</ListItem>
	);
}
