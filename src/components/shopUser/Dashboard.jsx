import React from 'react';
import { Link } from 'react-router-dom';

const ShopUserDashboard = () => {
    return (
        <div className="dashboard">
            <h2>Shop User Dashboard</h2>
            <ul>
                <li><Link to="/shop/card-balance">Swipe Card & View Balance</Link></li>
                <li><Link to="/shop/charge-card">Charge Card</Link></li>
                <li><Link to="/shop/transactions">View Transactions</Link></li>
            </ul>
        </div>
    );
};

export default ShopUserDashboard;
