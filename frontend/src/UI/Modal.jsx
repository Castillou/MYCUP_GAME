import { useEffect, useRef } from 'react';
import classes from './Modal.module.css';

// eslint-disable-next-line react/prop-types
export default function Modal({ children, onClose }) {
	const dialog = useRef();

	useEffect(() => {
		const modal = dialog.current;
		modal.showModal();

		const escKeyModalClose = (e) => {
			if (e.key === 'Escape') {
				modal.close();
			}
		};

		window.addEventListener('keydown', escKeyModalClose);
		return () => window.removeEventListener('keydown', escKeyModalClose);
	}, []);

	return (
		<dialog className={classes.modal} ref={dialog} onClose={onClose}>
			{children}
		</dialog>
	);
}
