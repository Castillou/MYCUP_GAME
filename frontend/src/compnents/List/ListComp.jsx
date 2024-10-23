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

const DUMMY_ITEM = [
	{
		id: 'w1',
		img: [sin, jja],
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w2',
		img: [sin, jja],
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w3',
		img: [sin, jja],
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w4',
		img: [sin, jja],
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w5',
		img: [sin, jja],
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w6',
		img: [sin, jja],
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w7',
		img: [sin, jja],
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w8',
		img: [sin, jja],
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w9',
		img: [sin, jja],
		label: '라면 월드컵',
		description: '자신에게 가장 맛있는 라면을 골라보세요.',
	},
	{
		id: 'w10',
		img: [sin, jja],
		label: '라면 월드컵',
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
						img={item.img}
						label={item.label}
						description={item.description}
					/>
				))}
			</ListBox>
		</ListSection>
	);
}
