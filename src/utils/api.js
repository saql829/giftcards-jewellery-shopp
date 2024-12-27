// src/utils/api.js

import axios from 'axios';

// Create axios instance for API requests
const api = axios.create({
    baseURL: 'https://your-api-url.com',  // Replace with your API URL
});

// Function to get all cards
export const getAllCards = async () => {
    const response = await api.get('/giftcards');
    return response.data;
};

// Function to fetch balance of a specific card
export const fetchCardBalance = async (cardNumber) => {
    const response = await api.get(`/card/${cardNumber}`);  // Adjust URL as needed
    return response.data.balance;
};

// Function to fetch transactions for a user
export const fetchTransactions = async (userId) => {
    const response = await api.get(`/transactions/${userId}`);  // Adjust URL as needed
    return response.data;
};

// Function to charge a card
export const chargeCard = async (cardNumber, amount) => {
    const response = await api.post('/charge', { cardNumber, amount });
    return response.data;
};
