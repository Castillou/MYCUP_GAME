import styled from 'styled-components';
import ListButtonComp from '../compnents/List/ListButtonComp';
import ListComp from '../compnents/List/ListComp';

const Wrapper = styled.section`
	width: 100%;
	height: 92vh;
	padding: 3rem 5rem;
	background-color: #f9f9f9;
`;

export default function ListPage() {
	return (
		<Wrapper>
			<ListButtonComp />
			<ListComp />
		</Wrapper>
	);
}
