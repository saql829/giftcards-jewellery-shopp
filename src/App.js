import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './components/AppRoutes'; // Import AppRoutes for routing

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <AppRoutes />  {/* Routing logic handled here */}
            </Router>
        </AuthProvider>
    );
};

export default App;
