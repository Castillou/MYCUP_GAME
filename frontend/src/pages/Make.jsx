import styled from 'styled-components';
import TopButtons from '../compnents/Make/TopButtons';
import UploadForm from '../compnents/Make/UploadForm';

const Wrapper = styled.section`
	width: 100%;
	padding: 3rem 5rem;
`;

export default function MaKePage() {
	return (
		<Wrapper>
			<TopButtons name="make" />
			<UploadForm method="post" />
		</Wrapper>
	);
}
