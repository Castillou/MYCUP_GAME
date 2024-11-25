import { useState } from 'react';
import eye from '../assets/eye.svg';
import eyeS from '../assets/eye-slash.svg';

export default function useShowPassword() {
	const [inputType, setInputType] = useState('password');
	const [icon, setIcon] = useState(eye);

	const handleShow = () => {
		setIcon(eyeS);
		setInputType('text');
	};
	const handleHide = () => {
		setIcon(eye);
		setInputType('password');
	};

	return [inputType, icon, handleShow, handleHide];
}
