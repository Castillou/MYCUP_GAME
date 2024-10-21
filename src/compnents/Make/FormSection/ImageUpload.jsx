import styled from 'styled-components';

const FormSection = styled.div`
	width: 100%;
	background-color: #fff;
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
	padding: 2rem 3rem;
	font-size: 2rem;
	font-weight: 800;
	color: #2e93ff;
	border-bottom: 2px solid #efefef;
`;

const Dropzone = styled.form`
	min-height: 14rem;
	border: 1px dashed #efefef;
	padding: 2rem;

	.dz-message {
		padding: 5rem 0;
		border: 2px solid #c9c9c9;
		text-align: center;
		font-size: 2rem;
		font-weight: 700;
		line-height: 1.5;
		color: #777;
	}
`;

export default function ImageUpload() {
	return (
		<FormSection>
			<Title>이상형 월드컵 이미지 업로드</Title>
			<Dropzone
				action="upload.php?uid=6qpbGP"
				className="dropzone dz-clickable"
				id="dropzoneForm"
			>
				<div className="dz-default dz-message">
					<span>
						Drop files here or click to upload.
						<br />
						여기 파일을 놓거나 클릭하여 업로드하세요.
					</span>
				</div>
			</Dropzone>
		</FormSection>
	);
}
