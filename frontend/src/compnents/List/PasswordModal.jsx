import { useRef } from 'react';
import Modal from '../../UI/Modal';
import classes from './ListModal.module.css';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function PasswordModal({ id, password, onClose }) {
	const input = useRef();
	const navigate = useNavigate();

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleStartFriendsGame();
		}
	};

	const handleStartFriendsGame = () => {
		if (input.current.value === password) {
			navigate(`/list/${id}`);
		} else {
			alert('비밀번호가 일치하지 않습니다.');
			onClose();
		}
	};

	return (
		<Modal onClose={onClose}>
			<div className={classes.password_modal}>
				<input
					type="password"
					ref={input}
					name="password"
					onKeyDown={handleKeyDown}
				/>
				<button type="button" onClick={handleStartFriendsGame}>
					확인
				</button>
			</div>
		</Modal>
	);
}
