import { useState } from 'react';

export default function useProcessStatus() {
	const [isProcessing, setIsProcessing] = useState(false);

	const handleStartProcess = () => {
		setIsProcessing(true);
	};

	const handleStopProcess = () => {
		setIsProcessing(false);
	};

	return [isProcessing, handleStartProcess, handleStopProcess];
}
