import React, { useState } from 'react';
import axios from 'axios';

const ChargeCard = ({ cardNumber, userId }) => {
    const [amount, setAmount] = useState(0);

    const handleCharge = async () => {
        try {
            await axios.post('https://aptech.heritagejewels.com.pk/microservices/addtransaction.php', {
                cardNumber,
                amount,
                userId
            });
            alert('Card charged successfully');
        } catch (err) {
            console.error('Error charging card:', err);
        }
    };

    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount to charge"
            />
            <button onClick={handleCharge}>Charge Card</button>
        </div>
    );
};

export default ChargeCard;
