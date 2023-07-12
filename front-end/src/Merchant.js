import React, { useEffect, useState } from 'react';
import {  useHistory } from 'react-router-dom';

function Merchant() {
  const [items, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:8081/merchant/get-all')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error(error));
  }, []);

  const handleEdit = (item) => {
    history.push({
      pathname: '/edit/' + item.referenceUuid,
      item
    });
  };

  const handleTransactionRequest = (item) => {
    history.push({
      pathname: '/transaction/get-all/' + item.referenceUuid,
      item
    });
  };

  return (
      <div className="container mt-4 text-center">
        <h1>Merchant Page</h1>
        <table className="table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Total</th>
            <th>Edit</th>
            <th>Disable</th>
            <th>Show Transactions</th>
          </tr>
          </thead>
          <tbody>
          {items.map((item) => (

              <tr key={item.referenceUuid}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.description}</td>
                <td>{item.totalTransactionSum}</td>
                <td>
                  <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary">Disable</button>
                </td>
                <td>
                  <button className="btn btn-primary"
                  onClick={() => handleTransactionRequest(item.referenceUuid)}>Transactions</button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default Merchant;