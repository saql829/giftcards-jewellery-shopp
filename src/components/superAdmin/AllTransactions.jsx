import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const url = filter 
                    ? `https://aptech.heritagejewels.com.pk/microservices/transaction.php?cardnumber=${filter}`
                    : 'https://aptech.heritagejewels.com.pk/microservices/alltransactions.php';
                const response = await axios.get(url);
                setTransactions(response.data);
            } catch (err) {
                console.error('Error fetching transactions:', err);
            }
        };

        fetchTransactions();
    }, [filter]);

    return (
        <div>
            <h2>All Transactions</h2>
            <input
                type="text"
                placeholder="Filter by Card Number"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Card Number</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx, index) => (
                        <tr key={index}>
                            <td>{tx.date}</td>
                            <td>{tx.time}</td>
                            <td>{tx.location}</td>
                            <td>{tx.cardNumber}</td>
                            <td>{tx.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllTransactions;
