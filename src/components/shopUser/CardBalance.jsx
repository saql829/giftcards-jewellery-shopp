import React, { useState, useEffect } from 'react';
// src/components/shopUser/CardBalance.jsx
import { fetchCardBalance } from '../../utils/api';  // Ensure the import path is correct
 // Make sure to import API functions correctly

const CardBalance = ({ cardNumber }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (cardNumber) {
      fetchCardBalance(cardNumber).then((data) => setBalance(data.balance));
    }
  }, [cardNumber]);

  return (
    <div>
      <h3>Card Balance</h3>
      {balance !== null ? <p>Balance: {balance}</p> : <p>Loading...</p>}
    </div>
  );
};

export default CardBalance;
