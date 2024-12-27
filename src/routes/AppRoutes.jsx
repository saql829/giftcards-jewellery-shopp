import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/auth/Login';
import CardBalance from '../components/shopUser/CardBalance';
import ChargeCard from '../components/shopUser/ChargeCard';
import Transactions from '../components/shopUser/Transactions';
import AllCards from '../components/superAdmin/AllCards';
import AllTransactions from '../components/superAdmin/AllTransactions';
import UserManagement from '../components/superAdmin/UserManagement';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            
            {/* Shop User Routes */}
            <Route path="/card-balance" element={<ProtectedRoute role="ShopUser"><CardBalance /></ProtectedRoute>} />
            <Route path="/charge-card" element={<ProtectedRoute role="ShopUser"><ChargeCard /></ProtectedRoute>} />
            <Route path="/transactions" element={<ProtectedRoute role="ShopUser"><Transactions /></ProtectedRoute>} />
            
            {/* Super Admin Routes */}
            <Route path="/all-cards" element={<ProtectedRoute role="SuperAdmin"><AllCards /></ProtectedRoute>} />
            <Route path="/all-transactions" element={<ProtectedRoute role="SuperAdmin"><AllTransactions /></ProtectedRoute>} />
            <Route path="/user-management" element={<ProtectedRoute role="SuperAdmin"><UserManagement /></ProtectedRoute>} />
        </Routes>
    );
};

export default AppRoutes;
