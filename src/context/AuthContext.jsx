import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check for user session on page load (optional)
    useEffect(() => {
        const savedUser = localStorage.getItem('user'); // Or use a cookie/session
        if (savedUser) {
            setUser(JSON.parse(savedUser)); // If user found in localStorage, set it in state
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); // Save to localStorage (or sessionStorage)
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Remove from localStorage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
