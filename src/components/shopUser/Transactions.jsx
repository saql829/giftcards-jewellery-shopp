import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../../utils/api';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions().then((data) => setTransactions(data));
  }, []);

  return (
    <div>
      <h3>Transactions</h3>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.cardNumber} - {transaction.amount} - {transaction.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions available</p>
      )}
    </div>
  );
};

export default Transactions;
