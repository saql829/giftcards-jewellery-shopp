import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
    const { user, isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    if (role && user?.role !== role) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
