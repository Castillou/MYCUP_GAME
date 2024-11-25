import { useEffect, useRef } from 'react';
import classes from './Modal.module.css';
import { createPortal } from 'react-dom';

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

	return createPortal(
		<dialog className={classes.modal} ref={dialog} onClose={onClose}>
			{children}
		</dialog>,
		document.getElementById('modal')
	);
}
