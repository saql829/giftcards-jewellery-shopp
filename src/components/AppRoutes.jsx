import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Dashboard from './shopUser/Dashboard';
import CardBalance from './shopUser/CardBalance';
import ChargeCard from './shopUser/ChargeCard';
import Transactions from './shopUser/Transactions';
import AllCards from './superAdmin/AllCards';
import AllTransactions from './superAdmin/AllTransactions';
import UserManagement from './superAdmin/UserManagement';
import ProtectedRoute from './auth/ProtectedRoute';  // Protected routes for authentication

const AppRoutes = () => {
    return (
        <Routes>
            {/* Login Route */}
            <Route path="/login" element={<Login />} />
            
            {/* Shop User Routes */}
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } />
            <Route path="/card-balance" element={
                <ProtectedRoute>
                    <CardBalance />
                </ProtectedRoute>
            } />
            <Route path="/charge-card" element={
                <ProtectedRoute>
                    <ChargeCard />
                </ProtectedRoute>
            } />
            <Route path="/transactions" element={
                <ProtectedRoute>
                    <Transactions />
                </ProtectedRoute>
            } />

            {/* Super Admin Routes */}
            <Route path="/all-cards" element={
                <ProtectedRoute>
                    <AllCards />
                </ProtectedRoute>
            } />
            <Route path="/all-transactions" element={
                <ProtectedRoute>
                    <AllTransactions />
                </ProtectedRoute>
            } />
            <Route path="/user-management" element={
                <ProtectedRoute>
                    <UserManagement />
                </ProtectedRoute>
            } />
        </Routes>
    );
};

export default AppRoutes;
