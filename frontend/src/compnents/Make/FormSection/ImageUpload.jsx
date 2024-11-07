import styled from 'styled-components';
import InputRow from './InputRow';

const Container = styled.div`
	width: 100%;
	background-color: #fff;

	h2 {
		padding: 2rem 3rem;
		font-size: 2rem;
		font-weight: 800;
		color: #2e93ff;
		border-bottom: 2px solid #efefef;
	}
`;

export default function ImageUpload() {
	const INPUT_CONT = [
		{
			id: 'r3',
			label: '1번 이미지',
			name: 'image',
			description: '첫 번째 이미지 링크를 입력해주세요.',
		},
		{
			id: 'r4',
			label: '2번 이미지',
			name: 'image',
			description: '두 번째 이미지 링크를 입력해주세요.',
		},
	];

	return (
		<Container>
			<h2>이상형 월드컵 이미지 업로드</h2>
			{INPUT_CONT.map(({ id, name, label, description }) => (
				<InputRow
					key={id}
					name={name}
					label={label}
					description={description}
				/>
			))}
		</Container>
	);
}
