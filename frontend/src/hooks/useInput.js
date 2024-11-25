import { useCallback, useState } from 'react';

export default function useInput(value) {
	const [inputValue, setInputValue] = useState(value);

	const handleInput = useCallback((e) => {
		setInputValue(e.target.value);
	}, []);

	return [inputValue, handleInput];
}
