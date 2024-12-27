import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ username: '', password: '', role: 'ShopUser' });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://aptech.heritagejewels.com.pk/microservices/allusers.php');
                setUsers(response.data);
            } catch (err) {
                console.error('Error fetching users:', err);
            }
        };

        fetchUsers();
    }, []);

    const handleAddUser = async () => {
        try {
            await axios.post('https://aptech.heritagejewels.com.pk/microservices/adduser.php', newUser);
            alert('User added successfully');
        } catch (err) {
            console.error('Error adding user:', err);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await axios.post('https://aptech.heritagejewels.com.pk/microservices/deleteuser.php', { userId });
            alert('User deleted successfully');
        } catch (err) {
            console.error('Error deleting user:', err);
        }
    };

    return (
        <div>
            <h2>User Management</h2>
            <h3>Add New User</h3>
            <input
                type="text"
                placeholder="Username"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
            <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
                <option value="ShopUser">Shop User</option>
                <option value="Admin">Admin</option>
            </select>
            <button onClick={handleAddUser}>Add User</button>

            <h3>Existing Users</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.userId}>
                        {user.username} ({user.role})
                        <button onClick={() => handleDeleteUser(user.userId)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
