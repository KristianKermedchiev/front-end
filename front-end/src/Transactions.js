import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Transactions(props) {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/transaction/get-all/?referenceUuid=' + props.location.item)
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
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Transaction Status</th>
                    <th>Customer Email</th>
                    <th>Customer Phone</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.amount}</td>
                        <td>{transaction.status}</td>
                        <td>{transaction.transactionStatus}</td>
                        <td>{transaction.customerEmail}</td>
                        <td>{transaction.customerPhone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to="/merchant" className="btn btn-primary">Back</Link>
        </div>
    );
}

export default Transactions;