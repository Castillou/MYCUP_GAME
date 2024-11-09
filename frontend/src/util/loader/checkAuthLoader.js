import { redirect } from 'react-router-dom';
import { getAuthToken } from '../auth';
import { loader as eventsLoader } from './eventsLoader';

export function checkAuthLoader() {
	const token = getAuthToken();
	const loadedData = eventsLoader();

	if (!token) {
		return redirect('/auth?mode=login');
	}

	return loadedData;
}
