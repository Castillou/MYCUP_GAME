import { SyncLoader } from 'react-spinners';
import styled from 'styled-components';

const SpinnerWrapper = styled.section`
	width: 100%;
	height: 75rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoadingSpinner = () => {
	return (
		<SpinnerWrapper>
			<SyncLoader color="#007bff" margin={5} />
		</SpinnerWrapper>
	);
};

export default LoadingSpinner;
