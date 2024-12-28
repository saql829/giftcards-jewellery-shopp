// src/components/auth/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Custom hook for Auth context

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // Login function from context
    const navigate = useNavigate(); // Hook to navigate after successful login

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Validate login with multiple usernames
        if (
            (username === 'admin' && password === '123') ||
            (username === 'shop1' && password === '123') ||
            (username === 'shop2' && password === '123')
        ) {
            // Simulate a successful login with user data
            let userData;
            if (username === 'admin') {
                userData = { username: 'admin', role: 'SuperAdmin' }; // Example user data for admin
            } else if (username === 'shop1' || username === 'shop2') {
                userData = { username, role: 'Shop' }; // Example user data for shops
            }

            login(userData); // Update the user state in context

            // Redirect to dashboard after successful login
            navigate('/dashboard');
        } else {
            // Handle failed login
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
