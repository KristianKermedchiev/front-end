import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Merchant() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // update port if needed/ update route if needed
    fetch('http://localhost:8085/merchant')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4 text-center">
      <h1>Merchant Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>CHANGE</th>
            <th>Total</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            // update index in case each record has a uid
            <tr key={index}>
                {/* update field's properties as per DB convention */}

              <td>{item.name}</td>
              <td>{item.change}</td>
              <td>{item.total}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/transactions" className="btn btn-primary">Transactions</Link>
    </div>
  );
}

export default Merchant;
