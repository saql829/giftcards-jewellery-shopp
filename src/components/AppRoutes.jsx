// src/components/AppRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importing Routes and Route for routing
import Login from '../components/auth/Login'; // Import Login component
import Dashboard from '../components/shopUser/Dashboard'; // Import Dashboard component
import CardBalance from '../components/shopUser/CardBalance'; // Import CardBalance component
import ChargeCard from '../components/shopUser/ChargeCard'; // Import ChargeCard component
import Transactions from '../components/shopUser/Transactions'; // Import Transactions component
import AllCards from '../components/superAdmin/AllCards'; // Import AllCards component
import AllTransactions from '../components/superAdmin/AllTransactions'; // Import AllTransactions component
import UserManagement from '../components/superAdmin/UserManagement'; // Import UserManagement component
import ProtectedRoute from './auth/ProtectedRoute'; // Import ProtectedRoute for role-based routing

const AppRoutes = () => {
    return (
        <Routes>
            {/* Login Route */}
            <Route path="/" element={<Login />} />
            
            {/* Shop User Routes */}
            <Route path="/dashboard" element={
                <ProtectedRoute role="ShopUser">
                    <Dashboard />
                </ProtectedRoute>
            } />
            <Route path="/card-balance" element={
                <ProtectedRoute role="ShopUser">
                    <CardBalance />
                </ProtectedRoute>
            } />
            <Route path="/charge-card" element={
                <ProtectedRoute role="ShopUser">
                    <ChargeCard />
                </ProtectedRoute>
            } />
            <Route path="/transactions" element={
                <ProtectedRoute role="ShopUser">
                    <Transactions />
                </ProtectedRoute>
            } />
            
            {/* Super Admin Routes */}
            <Route path="/all-cards" element={
                <ProtectedRoute role="SuperAdmin">
                    <AllCards />
                </ProtectedRoute>
            } />
            <Route path="/all-transactions" element={
                <ProtectedRoute role="SuperAdmin">
                    <AllTransactions />
                </ProtectedRoute>
            } />
            <Route path="/user-management" element={
                <ProtectedRoute role="SuperAdmin">
                    <UserManagement />
                </ProtectedRoute>
            } />
        </Routes>
    );
};

export default AppRoutes;
