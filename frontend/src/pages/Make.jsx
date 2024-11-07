import styled from 'styled-components';
import TopButtons from '../compnents/Make/TopButtons';
import FormComp from '../compnents/Make/FormSection/FormComp';

const Wrapper = styled.section`
	width: 100%;
	padding: 11rem 5rem 3rem;
`;

export default function MaKePage() {
	return (
		<Wrapper>
			<TopButtons />
			<FormComp />
		</Wrapper>
	);
}
