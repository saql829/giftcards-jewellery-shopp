import axios from 'axios';

const BASE_URL = 'https://aptech.heritagejewels.com.pk/microservices';

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Authentication API
export const login = (credentials) => api.post('/login.php', credentials);

// Card APIs
export const getAllCards = () => api.get('/giftcard.php');
export const getSingleCard = (cardNumber) => api.get(`/singlecard.php?cardnumber=${cardNumber}`);
export const chargeCard = (data) => api.post('/addtransaction.php', data);

// Transaction APIs
export const getAllTransactions = () => api.get('/transaction.php');
export const getUserTransactions = (userId) => api.get(`/transaction.php?userid=${userId}`);
