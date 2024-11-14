import { useNavigate } from 'react-router-dom';
import Modal from '../../UI/Modal';

// eslint-disable-next-line react/prop-types
export default function PasswordModal({ password, id, onClose }) {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		const data = new FormData(event.target);

		console.log(password);

		if (data.get('password') === password) {
			navigate(`/list/${id}`);
		} else {
			alert('비밀번호가 일치하지 않습니다.');
			onClose();
		}
	};

	return (
		<Modal>
			<form onSubmit={handleSubmit}>
				<input type="password" name="password" />
				<button type="submit">확인</button>
			</form>
		</Modal>
	);
}
