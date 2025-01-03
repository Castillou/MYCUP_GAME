import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './ProfileEditModal.module.css';
import userDefault from '../../assets/user.svg';
import Modal from '../../UI/Modal';
import ErrorBlock from '../../UI/ErrorBlock';
import { useMutation } from '@tanstack/react-query';
import { action as userEditAction } from '../../util/actions/userEditAction';

// eslint-disable-next-line react/prop-types
export default function UserEditModal({ onClose }) {
	const inputRef = useRef();
	const navigate = useNavigate();
	const username = localStorage.getItem('username');
	const [userImage, setUserImage] = useState(null);

	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: userEditAction,
		onSuccess: () => {
			navigate('/');
		},
	});

	const handleChooseFile = () => {
		inputRef.current.click();
	};

	const handleImageChange = (event) => {
		const newImage = event.target.files?.[0];
		setUserImage(newImage);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		mutate({ username, data: formData });
	};

	return (
		<Modal onClose={onClose}>
			{isError && (
				<ErrorBlock
					title="정보를 저장하지 못했습니다."
					message={
						error.info?.message || '사용자 정보를 저장하지 못했습니다. 잠시 후에 다시 시도해주세요.'
					}
				/>
			)}
			<form onSubmit={handleSubmit} className={classes.profile_edit_modal}>
				<div className={classes.image_input}>
					<img
						src={userImage === null ? userDefault : URL.createObjectURL(userImage)}
						alt="프로필 이미지"
						onClick={handleChooseFile}
					/>
					<input
						ref={inputRef}
						name="new_userimage"
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						hidden
					/>
				</div>
				<div className={classes.input_row}>
					<label htmlFor="new_username">이름</label>
					<input
						type="text"
						id="new_username"
						name="new_username"
						placeholder="이름을 입력해주세요."
					/>
				</div>
				<div className={classes.input_row}>
					<label htmlFor="new_description">설명</label>
					<textarea
						type="text"
						id="new_description"
						name="new_description"
						placeholder="설명을 입력해주세요."
					/>
				</div>
				<button type="sumbit" disabled>
					{isPending ? '저장중...' : '저장하기'}
				</button>
			</form>
		</Modal>
	);
}
