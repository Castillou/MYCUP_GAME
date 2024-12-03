import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PasswordModal from './PasswordModal';
import DeleteCheckModal from './DeleteCheckModal';
import useProcessStatus from '../../hooks/useProcessStatus';

const ListItemContainer = styled.li`
	width: 34rem;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	border-radius: 2rem;
	overflow: hidden;
`;

const InfoContainer = styled.div`
	position: relative;

	h2 {
		font-weight: 600;
		padding: 2rem 2rem 1rem;
		font-size: 2rem;
		position: relative;
	}

	p {
		padding: 0.5rem 2rem 1.5rem;
		font-size: 1.5rem;
		font-weight: 300;
	}

	span {
		position: absolute;
		top: 1.75rem;
		right: 2rem;

		padding: 0.5rem 0.75rem;
		border-radius: 5px;

		font-size: 1.2rem;
		color: #f9f9f9;
		background-color: #435dd8;

		&.friends-label {
			background-color: #fc5185;
		}
	}
`;

const ImgBox = styled.div`
	width: 100%;
	background-color: #efefef;
	display: flex;

	img {
		width: 50%;
		height: 23rem;
		object-fit: cover;
	}
`;

const ButtonContainer = styled.div`
	padding: 0 2rem 1.5rem;
	display: flex;
	gap: 1rem;
`;

const Button = styled.button`
	flex: 1;
	border: none;
	border-radius: 2rem;
	padding: 0;
	cursor: pointer;
	background-color: #efefef;

	overflow: hidden;

	&.start-btn {
		display: block;
		width: 100%;
		padding: 0.8rem 0;
		background-color: #ff3d3d;
		color: #fff;
		font-weight: 600;
	}

	&.start-btn:hover {
		background-color: #ff7a7a;
	}

	&:hover {
		background-color: #f9f9f9;
	}
`;

/* eslint-disable react/prop-types */
export default function ListItem({
	id,
	img,
	title,
	description,
	radio,
	name,
	password,
}) {
	const navigate = useNavigate();
	const username = localStorage.getItem('username');
	const [isFriendsGame, setIsFriendsGame] = useState(false);
	const [isProcessing, handleStartProcess, handleStopProcess] =
		useProcessStatus();

	const handleCheckFriends = () => {
		if (radio === 'friends') {
			setIsFriendsGame(true);
		} else {
			navigate(`/list/${id}`);
		}
	};
	const handleStopCheck = () => {
		setIsFriendsGame(false);
	};

	let optionLabel;

	if (radio === 'personal') {
		optionLabel = <span className="personal-label">비공개</span>;
	}

	if (radio === 'friends') {
		optionLabel = <span className="friends-label">친구 공개</span>;
	}

	return (
		<>
			{isFriendsGame && (
				<PasswordModal
					gameId={id}
					password={password}
					onClose={handleStopCheck}
				/>
			)}
			{isProcessing && (
				<DeleteCheckModal gameId={id} onClose={handleStopProcess} />
			)}
			<ListItemContainer option={radio}>
				<ImgBox>
					<img src={img[0]} />
					<img src={img[1]} />
				</ImgBox>
				<InfoContainer>
					<h2>{title}</h2>
					<p>{description}</p>
					{optionLabel}
				</InfoContainer>
				<ButtonContainer>
					<Button className="start-btn" onClick={handleCheckFriends}>
						시작하기
					</Button>
					{username === name && (
						<>
							<Button>
								<Link to={`/${username}/edit/${id}`}>수정하기</Link>
							</Button>
							<Button onClick={handleStartProcess}>삭제</Button>
						</>
					)}
				</ButtonContainer>
			</ListItemContainer>
		</>
	);
}
