import { createContext, useContext } from 'react';

const AppContext = createContext();

export const useToken = () => {
	const { token } = useContext(AppContext);
	return token;
};

export const useEvents = () => {
	const context = useContext(AppContext);
	return context.events;
};

export default AppContext;
