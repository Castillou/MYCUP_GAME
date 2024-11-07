import styled from 'styled-components';
import ListItemComp from './ListItemComp';
import { useToken } from '../../util/tokenContext';

const ListSection = styled.section`
	width: 100%;
`;

const ListBox = styled.ul`
	list-style-type: none;
	width: 100%;
	gap: 2.3rem;
	display: flex;
	flex-wrap: wrap;
`;

/* eslint-disable react/prop-types */
export default function ListComp({ events }) {
	const token = useToken();
	const username = localStorage.getItem('username');

	if (!token) {
		events = events.filter((item) => item.radio === 'public');
	} else {
		events = events.filter((item) => {
			if (item.radio === 'public') {
				return item;
			}
			if (item.radio === 'personal' && item.username === username) {
				return item;
			}
		});
	}

	return (
		<ListSection>
			<ListBox>
				{events.map((item) => (
					<ListItemComp
						key={item.id}
						id={item.id}
						img={item.images}
						title={item.title}
						description={item.description}
						radio={item.radio}
						name={item.username}
					/>
				))}
			</ListBox>
		</ListSection>
	);
}
