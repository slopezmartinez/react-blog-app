import { createContext, useContext } from 'react';
/* this is the login useContext to check if a user is actually logged in */
const AuthContext = createContext();

export const useUsername = () => {
    const { user } = useContext(AuthContext);
    return user ? user.username : null;

};
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
