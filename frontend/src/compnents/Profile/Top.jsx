import styled from 'styled-components';
import userDefault from '../../assets/user.svg';
import { useRef, useState } from 'react';

const Wrapper = styled.section`
	width: 100%;
	padding: 0 22rem 4rem;
	background-color: #fff;
`;

const Inner = styled.article`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(13, 1fr);
	position: relative;

	background-color: #fff;

	.profile_info {
		grid-row: 1/3;
		grid-column: 4/-1;
		padding: 5rem 0;

		.info_box {
			display: flex;
			align-items: flex-end;
			gap: 2rem;

			label {
				font-family: 'Audiowide', sans-serif;
				font-weight: bold;
				font-size: 4rem;
			}

			input {
				border: 1px solid #d1d1d1;
				font-size: 1.6rem;
				padding: 0.8rem 1rem;
				border-radius: 5px;
			}

			button {
				border: none;
				background-color: #efefef;
				padding: 0.8rem 1rem;
				border-radius: 5px;
			}
		}

		p {
			margin-top: 2rem;

			font-size: 2rem;
			line-height: 1.3;
			color: #555;
		}

		@media screen and (max-width: 1919px) {
			grid-column: 5/-1;
		}
	}
`;

const ImageBox = styled.article`
	position: absolute;
	left: 0;
	bottom: 0;

	grid-row: 1/-1;
	grid-column: 1/3;
	width: 26rem;
	padding: 1.5rem;

	border-radius: 5rem;
	backdrop-filter: blur(50px);
	box-shadow: 0 5px 10px rgba(100, 100, 100, 0.2);

	div {
		width: 100%;
		overflow: hidden;
		background-color: #eee;
		border-radius: 4rem;

		img {
			width: 100%;
			height: 23rem;
			cursor: pointer;
			object-fit: cover;
		}
	}
`;

export default function Top() {
	const username = localStorage.getItem('username');

	const inputRef = useRef();
	const [userImage, setUserImage] = useState(null);

	const handleChooseFile = () => {
		inputRef.current.click();
	};

	const handleImageChange = (event) => {
		const newImage = event.target.files[0];
		setUserImage(newImage);
	};

	return (
		<Wrapper>
			<Inner>
				<ImageBox>
					<div>
						<img
							src={
								userImage === null
									? userDefault
									: URL.createObjectURL(userImage)
							}
							alt="프로필 이미지"
							onClick={handleChooseFile}
						/>
						<input
							ref={inputRef}
							name="userImage"
							type="file"
							accept="image/*"
							onChange={handleImageChange}
							hidden
						/>
					</div>
				</ImageBox>
				<div className="profile_info">
					<div className="info_box">
						<label>{username}</label>;
					</div>
					<div className="info_box">
						<p>한줄로 자신을 표현해보세요.</p>
					</div>
				</div>
			</Inner>
		</Wrapper>
	);
}
