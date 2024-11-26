import styled from 'styled-components';
import userDefault from '../../assets/user.svg';
import UserEditModal from './UserEditModal';
import useProcessStatus from '../../hooks/useProcessStatus';

const Wrapper = styled.section`
	width: 100%;
	padding: 0 22rem 4rem;
	background-color: #fff;
`;

const Inner = styled.article`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(13, 1fr);
	position: relative;

	background-color: #fff;

	.profile_info {
		grid-row: 1 / 4;
		grid-column: 4/10;
		padding: 5rem 0 2rem;

		.info_box {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			h3 {
				font-family: 'Audiowide', sans-serif;
				font-weight: bold;
				font-size: 4rem;
			}

			p {
				font-size: 2rem;
				color: #555;
			}

			button {
				width: 10rem;
				padding: 0.5rem;
				border: none;
				border-radius: 48px;
				cursor: pointer;

				&:hover {
					background-color: #f7f7f7;
				}
			}
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

	grid-row: 1/4;
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
			object-fit: cover;
		}
	}
`;

export default function Top() {
	const username = localStorage.getItem('username');
	const [isProcessing, handleStartProcess, handleStopProcess] =
		useProcessStatus();

	return (
		<Wrapper>
			{isProcessing && (
				<UserEditModal onClose={handleStopProcess}></UserEditModal>
			)}
			<Inner>
				<ImageBox>
					<div>
						<img src={userDefault} alt="프로필 이미지" />
					</div>
				</ImageBox>
				<div className="profile_info">
					<div className="info_box">
						<h3>{username}</h3>
						<p>한줄로 자신을 표현해보세요.</p>
						<button onClick={handleStartProcess}>수정하기</button>
					</div>
				</div>
			</Inner>
		</Wrapper>
	);
}
