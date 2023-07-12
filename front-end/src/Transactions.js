import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4 text-center">
      <h1>Transactions Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>CHANGE</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            // update index in case each record has a uid
            <tr key={index}>
                {/* update field's properties as per DB convention */}
              <td>{transaction.name}</td> 
              <td>{transaction.change}</td> 
              <td>{transaction.total}</td> 
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/merchant" className="btn btn-primary">Merchant</Link>
    </div>
  );
}

export default Transactions;
