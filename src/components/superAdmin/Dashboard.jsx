import React from 'react';
import { Link } from 'react-router-dom';

const SuperAdminDashboard = () => {
    return (
        <div className="dashboard">
            <h2>Super Admin Dashboard</h2>
            <ul>
                <li><Link to="/admin/all-cards">View All Cards</Link></li>
                <li><Link to="/admin/all-transactions">View All Transactions</Link></li>
                <li><Link to="/admin/user-management">Manage Users</Link></li>
            </ul>
        </div>
    );
};

export default SuperAdminDashboard;
