import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState('');
    
    const login = async (username, password) => {
        try {
            const response = await axios.post('https://aptech.heritagejewels.com.pk/microservices/login.php', {
                username,
                password
            });
            const data = response.data;
            if (data.success) {
                setIsAuthenticated(true);
                setUserRole(data.role); // Save the role (ShopUser or Admin)
                return true;
            } else {
                throw new Error('Login failed');
            }
        } catch (err) {
            console.error(err.message);
            return false;
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserRole('');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
