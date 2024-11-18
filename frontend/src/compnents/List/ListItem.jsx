import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { action as deleteAction } from '../../util/actions/deleteAction';
import Modal from '../../UI/Modal';

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

	&.start_btn {
		display: block;
		width: 100%;
		padding: 0.8rem 0;
		background-color: #ff3d3d;
		color: #fff;
		font-weight: 600;
	}

	&.start_btn:hover {
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
	const input = useRef();
	const username = localStorage.getItem('username');
	const [isFriendsGame, setIsFriendsGame] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const handleCheckFriends = () => {
		if (radio === 'friends') {
			setIsFriendsGame(true);
		} else {
			navigate;
		}
	};

	const handleStopCheck = () => {
		setIsFriendsGame(false);
	};

	const handleStartFriendsGame = () => {
		if (input.current.value === password) {
			navigate(`/list/${id}`);
		} else {
			alert('비밀번호가 일치하지 않습니다.');
			setIsFriendsGame(false);
		}
	};

	const handleStartDelete = () => {
		setIsDeleting(true);
	};

	const handleStopDelete = () => {
		setIsDeleting(false);
	};

	const handleDelete = async () => {
		await deleteAction({ id: id });
		navigate('/list');
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
			{isFriendsGame &&
				createPortal(
					<Modal onClose={handleStopCheck}>
						<input type="password" ref={input} name="password" />
						<button type="button" onClick={handleStartFriendsGame}>
							확인
						</button>
					</Modal>,
					document.getElementById('modal')
				)}
			{isDeleting &&
				createPortal(
					<Modal onClose={handleStopCheck}>
						<div>
							<h2>정말 삭제하시겠습니까?</h2>
							<div>
								<button type="button" onClick={handleStopDelete}>
									취소
								</button>
								<button type="button" onClick={handleDelete}>
									확인
								</button>
							</div>
						</div>
					</Modal>,
					document.getElementById('modal')
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
					<Button className="start_btn" onClick={handleCheckFriends}>
						시작하기
					</Button>
					{username === name && (
						<>
							<Button>
								<Link to={`/${username}/edit/${id}`}>수정하기</Link>
							</Button>
							<Button onClick={handleStartDelete}>삭제</Button>
						</>
					)}
				</ButtonContainer>
			</ListItemContainer>
		</>
	);
}
