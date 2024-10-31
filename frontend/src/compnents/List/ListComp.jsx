import styled from 'styled-components';
import ListItemComp from './ListItemComp';
import sin from '../../assets/sin.jpg';
import jja from '../../assets/jja.jpg';

const ListSection = styled.section`
	width: 100%;
`;

const ListBox = styled.ul`
	list-style-type: none;
	width: 100%;
	gap: 3rem;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

// const sum1 = URL.createObjectURL('썸네일25.png');

const DUMMY_ITEM = [
	{
		id: 'g1',
		img: [sin, jja],
		title: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'g2',
		img: [sin, jja],
		title: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'g3',
		img: [sin, jja],
		title: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'g4',
		img: [sin, jja],
		title: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'g5',
		img: [sin, jja],
		title: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'g6',
		img: [sin, jja],
		title: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'g7',
		img: [sin, jja],
		title: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'g8',
		img: [sin, jja],
		title: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'g9',
		img: [sin, jja],
		title: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'g10',
		img: [sin, jja],
		title: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
];

export default function ListComp() {
	return (
		<ListSection>
			<ListBox>
				{DUMMY_ITEM.map((item) => (
					<ListItemComp
						key={item.id}
						id={item.id}
						img={item.img}
						label={item.title}
						description={item.description}
					/>
				))}
			</ListBox>
		</ListSection>
	);
}
