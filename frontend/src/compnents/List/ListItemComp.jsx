import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled.li`
	width: 34rem;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	border-radius: 2rem 2rem 0 0;
	overflow: hidden;

	border-bottom: ${({ radio }) => radio === 'personal' && '5px solid #435dd8'};
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
	padding: 2rem 2rem 1rem;
	font-size: 2rem;
`;
const Description = styled.p`
	padding: 0.5rem 2rem 1.5rem;
	font-size: 1.5rem;
	font-weight: 300;
`;

const ItemButtonBox = styled.div`
	padding: 0 2rem 1.5rem;
	display: flex;
	gap: 1rem;
`;
const ItemButton = styled.button`
	flex: 1;
	border: none;
	border-radius: 2rem;
	padding: 0.8rem 0;
	cursor: pointer;

	&:last-child {
		border-right: none;
	}

	&.active {
		background-color: #ff7b00;
		border-color: #ff7b00;
		color: #fff;
		font-weight: 600;
	}
	&:hover {
		opacity: 0.7;
	}
`;

// eslint-disable-next-line react/prop-types
export default function ListItemComp({ id, img, title, description, radio }) {
	return (
		<ListItem radio={radio}>
			<ImgBox>
				<Img src={img[0]} />
				<Img src={img[1]} />
			</ImgBox>
			<Label>{title}</Label>
			<Description>{description}</Description>
			<ItemButtonBox>
				<ItemButton className="active">
					<Link to={`/list/${id}`}>시작하기</Link>
				</ItemButton>
				<ItemButton>수정하기</ItemButton>
				<ItemButton>삭제</ItemButton>
			</ItemButtonBox>
		</ListItem>
	);
}
