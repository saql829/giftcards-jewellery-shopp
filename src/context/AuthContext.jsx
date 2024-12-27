// src/context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

// Create Context
const AuthContext = createContext();

// Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);

// Auth Provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);  // Set user data on login
    };

    const logout = () => {
        setUser(null);  // Clear user data on logout
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
