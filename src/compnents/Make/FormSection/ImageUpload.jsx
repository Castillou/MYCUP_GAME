import { useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;

	label {
		width: 100%;
		color: #629bd3;
	}

	.img-view {
		width: 100%;
		height: 20rem;
		border: 2px dashed #86c3ff;
		background-color: #f4f9fd;
		background-image: url(src);
		text-align: center;
		font-size: 2rem;
		font-weight: 700;
		line-height: 1.5;

		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.upload-image {
		width: 100%;
	}
`;

export default function ImageUpload() {
	const inputRef = useRef();

	const [selectedFile, setSelectedFile] = useState(null);
	console.log(selectedFile);

	const handleFileChange = (event) => {
		if (event.target.files && event.target.files.length > 0) {
			setSelectedFile(event.target.files[0]);
		}
	};

	const onChooseFile = () => {
		inputRef.current.click();
	};

	return (
		<Container>
			<Title>이상형 월드컵 이미지 업로드</Title>
			<Dropzone action="http://localhost/upload.php">
				<label htmlFor="input-file">
					<input
						ref={inputRef}
						onChange={handleFileChange}
						type="file"
						accept="image/*"
						hidden
					/>
					{selectedFile === null ? (
						<div className="img-view" onClick={onChooseFile}>
							<span>
								Drop files here or click to upload.
								<br />
								여기 파일을 놓거나 클릭하여 업로드하세요.
							</span>
						</div>
					) : (
						<img
							className="upload-image"
							src={URL.createObjectURL(selectedFile)}
							alt={selectedFile.name}
						/>
					)}
				</label>
			</Dropzone>
		</Container>
	);
}
