import Modal from '../../UI/Modal';
import classes from './ListModal.module.css';
import { useNavigate } from 'react-router-dom';
import { action as deleteAction } from '../../util/actions/deleteAction';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../util/loader/eventsLoader';

// eslint-disable-next-line react/prop-types
export default function DeleteCheckModal({ gameId, onClose }) {
	const navigate = useNavigate();

	const { mutate, isPending } = useMutation({
		mutationFn: deleteAction,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['events'] });
			navigate('/list');
		},
	});

	const handleDelete = async () => {
		mutate({ id: gameId });
	};

	return (
		<Modal onClose={onClose}>
			<div className={classes.delete_modal}>
				{!isPending && (
					<>
						<h3>정말 삭제하시겠습니까?</h3>
						<div className={classes.delete_modal_btn_box}>
							<button type="button" onClick={onClose}>
								취소
							</button>
							<button type="button" onClick={handleDelete}>
								확인
							</button>
						</div>
					</>
				)}
				{isPending && <p>삭제중...</p>}
			</div>
		</Modal>
	);
}
