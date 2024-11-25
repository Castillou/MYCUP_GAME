import Modal from '../../UI/Modal';
import classes from './ListModal.module.css';
import { useNavigate } from 'react-router-dom';
import { action as deleteAction } from '../../util/actions/deleteAction';

// eslint-disable-next-line react/prop-types
export default function DeleteCheckModal({ id, onClose }) {
	const navigate = useNavigate();

	const handleDelete = async () => {
		await deleteAction({ id: id });
		navigate('/list');
	};

	return (
		<Modal onClose={onClose}>
			<div className={classes.delete_modal}>
				<h3>정말 삭제하시겠습니까?</h3>
				<div className={classes.delete_modal_btn_box}>
					<button type="button" onClick={onClose}>
						취소
					</button>
					<button type="button" onClick={handleDelete}>
						확인
					</button>
				</div>
			</div>
		</Modal>
	);
}
