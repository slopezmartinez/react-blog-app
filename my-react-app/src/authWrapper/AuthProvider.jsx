import React, { useState } from 'react';
import AuthContext from './AuthContext';

export const AuthProvider = ({ children }) => {
    const [user, setUser] =useState(null);
    const[token, setToken] = useState(null);

    const login = (username, authToken) => {
        setUser({ username});
        setToken(authToken);

        localStorage.setItem('token', authToken);
        logcalStorage.setItem('user', username);
    };

    const logout =() => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    
    };
    return(
        <AuthContext.Provider
        value={{
            user, token, login, logout, isAuthenticated: !!user,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};