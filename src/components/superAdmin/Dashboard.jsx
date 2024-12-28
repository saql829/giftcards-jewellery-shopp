// src/components/superAdmin/Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h2>Welcome, Admin</h2>
            <ul>
                <li><Link to="/all-cards">All Cards</Link></li>
                <li><Link to="/all-transactions">All Transactions</Link></li>
                <li><Link to="/user-management">User Management</Link></li>
            </ul>
        </div>
    );
};

export default AdminDashboard;
