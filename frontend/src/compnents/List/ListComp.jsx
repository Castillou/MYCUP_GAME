import styled from 'styled-components';
import ListItemComp from './ListItemComp';
import { useToken } from '../../util/TokenContext';

const ListSection = styled.section`
	width: 100%;
`;

const ListBox = styled.ul`
	list-style-type: none;
	width: 100%;
	gap: 3rem;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

/* eslint-disable react/prop-types */
export default function ListComp({ events }) {
	const token = useToken();

	if (!token) {
		events = events.filter((item) => item.radio === 'public');
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
					/>
				))}
			</ListBox>
		</ListSection>
	);
}
