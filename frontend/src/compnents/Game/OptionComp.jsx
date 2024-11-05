import styled from 'styled-components';

const Option = styled.article`
	width: 50%;
	background-color: #333;
	border-radius: 5rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	overflow: hidden;
	position: relative;
	cursor: pointer;
	transition: all 1s ease-in-out;

	&.slide_left {
		transform: translateX(-160%);
		margin-right: -53%;
	}
	&.slide_right {
		transform: translateX(165%);
		margin-left: -53%;
	}
`;

const ImgBox = styled.img`
	display: block;
	width: 100%;
	height: 78vh;
	object-fit: cover;
`;

const Name = styled.h2`
	position: absolute;
	width: 100%;
	bottom: 10rem;
	color: white;
	font-size: 5rem;
	text-align: center;
	text-shadow: 0 0 1rem black;
`;

// eslint-disable-next-line react/prop-types
export default function OptionComp({ id, src, name, onClick, className }) {
	return (
		<Option className={className}>
			<ImgBox src={src} id={id} onClick={onClick} />
			<Name>{name}</Name>
		</Option>
	);
}
