import { useEffect, useRef } from 'react';
import classes from './Modal.module.css';

// eslint-disable-next-line react/prop-types
export default function Modal({ children }) {
	const dialog = useRef();

	useEffect(() => {
		const modal = dialog.current;
		modal.showModal();

		return () => {
			modal.close();
		};
	}, []);

	return (
		<dialog className={classes.modal} ref={dialog}>
			{children}
		</dialog>
	);
}
