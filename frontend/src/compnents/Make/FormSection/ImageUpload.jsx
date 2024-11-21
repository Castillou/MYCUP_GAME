import styled from 'styled-components';
import InputRow from './InputRow';

const Container = styled.div`
	width: 100%;
	background-color: #fff;

	> h2 {
		padding: 2rem 3rem;
		font-size: 2rem;
		font-weight: 800;
		color: #2e93ff;
		border-bottom: 2px solid #efefef;
	}
`;

// eslint-disable-next-line react/prop-types
export default function ImageUpload({ initialValue = ['', ''] }) {
	return (
		<Container>
			<h2>이상형 월드컵 이미지 업로드</h2>
			<InputRow
				id="image1"
				name="image"
				label="1번 이미지"
				description="첫 번째 이미지 링크를 입력해주세요."
				initialValue={initialValue[0]}
			/>
			<InputRow
				id="image2"
				name="image"
				label="2번 이미지"
				description="두 번째 이미지 링크를 입력해주세요."
				initialValue={initialValue[1]}
			/>
		</Container>
	);
}
