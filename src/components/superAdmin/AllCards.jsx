import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('https://aptech.heritagejewels.com.pk/microservices/allcards.php');
                setCards(response.data);
            } catch (err) {
                console.error('Error fetching cards:', err);
            }
        };

        fetchCards();
    }, []);

    return (
        <div>
            <h2>All Cards</h2>
            <table>
                <thead>
                    <tr>
                        <th>Card Number</th>
                        <th>Card Value</th>
                        <th>Card Balance</th>
                        <th>Total Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map((card, index) => (
                        <tr key={index}>
                            <td>{card.cardNumber}</td>
                            <td>{card.cardValue}</td>
                            <td>{card.balance}</td>
                            <td>{card.totalTransactions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllCards;
