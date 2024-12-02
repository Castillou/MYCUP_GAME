import { useCallback, useState } from 'react';

export default function useInput(value) {
	const [inputValue, setInputValue] = useState(value);

	const handleInput = useCallback((e) => {
		setInputValue(e.target.value);
	}, []);

	const inputReset = () => {
		setInputValue('');
	};

	return [inputValue, handleInput, inputReset];
}
