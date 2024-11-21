import { QueryClient } from '@tanstack/react-query';
export const queryClient = new QueryClient();

export async function loader() {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		const error = new Error('An error occurred while fetching the events');
		error.code = response.status;
		error.info = await response.json();
		throw error;
	}

	const { events } = await response.json();
	return events;
}
