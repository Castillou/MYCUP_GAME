import { getAuthToken } from '../auth';

export function tokenLoader() {
	return getAuthToken();
}
