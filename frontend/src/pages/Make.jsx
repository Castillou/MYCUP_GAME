import styled from 'styled-components';
import TopButtons from '../compnents/Make/TopButtons';
import UploadForm from '../compnents/Make/UploadForm';

const Wrapper = styled.section`
	width: 100%;
	padding: 11rem 5rem 3rem;
`;

export default function MaKePage() {
	return (
		<Wrapper>
			<TopButtons />
			<UploadForm />
		</Wrapper>
	);
}
