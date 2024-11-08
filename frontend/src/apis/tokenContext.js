import { createContext, useContext } from 'react';

const TokenContext = createContext(null);
export const useToken = () => useContext(TokenContext);

export default TokenContext;
