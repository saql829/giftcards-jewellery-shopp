import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionDetails = ({ cardNumber }) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get(`https://aptech.heritagejewels.com.pk/microservices/transaction.php?cardnumber=${cardNumber}`);
                setTransactions(response.data);
            } catch (err) {
                console.error('Error fetching transactions:', err);
            }
        };

        fetchTransactions();
    }, [cardNumber]);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul>
                {transactions.map((tx, index) => (
                    <li key={index}>
                        <p>{tx.date}</p>
                        <p>{tx.location}</p>
                        <p>{tx.cardNumber}</p>
                        <p>{tx.amount}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionDetails;
