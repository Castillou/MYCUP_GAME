import styled from 'styled-components';
import ListItem from '../List/ListItem';

const ListSection = styled.section`
	width: 100%;
	padding: 5rem 0;

	> p {
		margin-top: 10rem;
		text-align: center;
		font-size: 4rem;
		color: #999;
	}
`;

const ListBox = styled.ul`
	list-style-type: none;
	width: 100%;
	gap: 2.3rem;
	display: flex;
	flex-wrap: wrap;
`;

/* eslint-disable react/prop-types */
export default function Personal({ events }) {
	const username = localStorage.getItem('username');

	events = events.filter(
		(item) => item.username === username && item.radio === 'personal'
	);

	return (
		<ListSection>
			{events.length !== 0 ? (
				<ListBox>
					{events.map((item) => (
						<ListItem
							key={item.id}
							id={item.id}
							img={item.images}
							title={item.title}
							description={item.description}
							radio={item.radio}
							name={item.username}
							password={item.password}
						/>
					))}
				</ListBox>
			) : (
				<p>아직 만든 게임이 없어요!</p>
			)}
		</ListSection>
	);
}
