import { useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
		padding: 1rem;

		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 1rem;
		cursor: pointer;

		div {
			width: 100%;
		}
	}

	.upload-image {
		height: 100%;

		&:hover {
			opacity: 0.7;
		}
	}
`;

export default function Dropzone() {
	const inputRef = useRef();
	const [selectedFile, setSelectedFile] = useState([]);

	const handleFileChange = (event) => {
		if (event.target.files && event.target.files.length > 0) {
			if (selectedFile.length + event.target.files.length > 2) return;

			setSelectedFile((prev) => [...prev, ...event.target.files]);
		}
	};

	const handleChooseFile = () => {
		if (selectedFile.length >= 2) return;

		inputRef.current.click();
	};

	const handleDeleteFile = (imageToDelete) => {
		setSelectedFile((prev) => prev.filter((image) => image !== imageToDelete));
	};

	return (
		<Wrapper>
			<label htmlFor="input-file">
				<input
					ref={inputRef}
					name="images"
					onChange={handleFileChange}
					type="file"
					accept="image/*"
					multiple
					hidden
				/>

				<div className="img-view" onClick={handleChooseFile}>
					{selectedFile.length === 0 ? (
						<div>
							<span>
								Drop files here or click to upload.
								<br />
								여기 파일을 놓거나 클릭하여 업로드하세요.
							</span>
						</div>
					) : (
						selectedFile.map((image) => (
							<img
								key={image.name}
								className="upload-image"
								src={URL.createObjectURL(image)}
								alt={image.name}
								onClick={(event) => {
									event.stopPropagation();
									handleDeleteFile(image);
								}}
							/>
						))
					)}
				</div>
			</label>
		</Wrapper>
	);
}
