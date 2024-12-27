import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav>
            <h2>Jewellery Gift Cards</h2>
            <ul>
                {user?.role === 'SuperAdmin' && (
                    <>
                        <li><Link to="/all-cards">All Cards</Link></li>
                        <li><Link to="/all-transactions">All Transactions</Link></li>
                        <li><Link to="/user-management">User Management</Link></li>
                    </>
                )}
                {user?.role === 'ShopUser' && (
                    <>
                        <li><Link to="/card-balance">Card Balance</Link></li>
                        <li><Link to="/charge-card">Charge Card</Link></li>
                        <li><Link to="/transactions">Transactions</Link></li>
                    </>
                )}
                <li><button onClick={logout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
