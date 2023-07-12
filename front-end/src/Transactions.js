import { React } from 'react';
import { Link } from 'react-router-dom';

function Transactions() {
  const item = props.location.item;
  const { name, email, description, totalTransactionSum } = item;

  return (
    <div className="container mt-4 text-center">
      <h1>Transactions Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.description}</td>
              <td>{item.totalTransactionSum}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/merchant" className="btn btn-primary">Back</Link>
    </div>
  );
}

export default Transactions;
