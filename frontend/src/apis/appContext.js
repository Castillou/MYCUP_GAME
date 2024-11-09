import { createContext, useContext } from 'react';

const AppContext = createContext(null);

export const useToken = () => {
	const context = useContext(AppContext);
	return context.token;
};

export const useEvents = () => {
	const context = useContext(AppContext);
	return context.events;
};

export default AppContext;
