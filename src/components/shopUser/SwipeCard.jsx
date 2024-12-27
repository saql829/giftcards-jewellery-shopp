import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SwipeCard = ({ cardNumber }) => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchCardDetails = async () => {
            try {
                const response = await axios.get(`https://aptech.heritagejewels.com.pk/microservices/singlecard.php?cardnumber=${cardNumber}`);
                setBalance(response.data.balance);
            } catch (err) {
                console.error('Error fetching card details:', err);
            }
        };

        fetchCardDetails();
    }, [cardNumber]);

    return (
        <div>
            <h2>Card Balance: {balance}</h2>
        </div>
    );
};

export default SwipeCard;
