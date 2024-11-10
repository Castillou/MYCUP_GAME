import styled from 'styled-components';
import ListItem from './ListItem';
import { useToken } from '../../apis/appContext';

const ListSection = styled.section`
	width: 100%;
`;

const ItemContainer = styled.ul`
	list-style-type: none;
	width: 100%;
	gap: 2.3rem;
	display: flex;
	flex-wrap: wrap;
`;

/* eslint-disable react/prop-types */
export default function ListContainer({ events }) {
	const token = useToken();
	const username = localStorage.getItem('username');

	if (!token) {
		events = events.filter((item) => item.radio === 'public');
	} else {
		events = events.filter((item) => {
			if (
				item.username === username ||
				item.radio === 'public' ||
				item.radio === 'friends'
			) {
				return item;
			}
		});
	}
	console.log(events);

	return (
		<ListSection>
			<ItemContainer>
				{events.map((item) => (
					<ListItem
						key={item.id}
						id={item.id}
						img={item.images}
						title={item.title}
						description={item.description}
						radio={item.radio}
						name={item.username}
					/>
				))}
			</ItemContainer>
		</ListSection>
	);
}
