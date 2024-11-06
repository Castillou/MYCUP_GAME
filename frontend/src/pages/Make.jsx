import styled from 'styled-components';
import TopButtons from '../compnents/Make/TopButtons';
import FormComp from '../compnents/Make/FormSection/FormComp';

const Wrapper = styled.section`
	width: 100%;
	padding: 3rem 5rem;
`;

export default function MaKePage() {
	return (
		<Wrapper>
			<TopButtons />
			<FormComp />
		</Wrapper>
	);
}
