import styled from 'styled-components';
import ButtonSectionComp from '../compnents/Make/ButtonSectionComp';
import FormSectionComp from '../compnents/Make/FormSectionComp';

const Wrapper = styled.section`
	width: 100%;
	padding: 3rem 5rem;
	background-color: #f9f9f9;
`;

export default function MaKePage() {
	return (
		<Wrapper>
			<ButtonSectionComp />
			<FormSectionComp />
		</Wrapper>
	);
}
