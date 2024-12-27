// src/components/auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';  // Use the AuthContext

const ProtectedRoute = ({ children, role }) => {
    const { user, isAuthenticated } = useAuth();  // Get user and authentication state

    // Redirect if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Redirect if user role does not match
    if (role && user?.role !== role) {
        return <Navigate to="/" replace />;
    }

    return children;  // If authenticated, render the children (e.g., Dashboard)
};

export default ProtectedRoute;
