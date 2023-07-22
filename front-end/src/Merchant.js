import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Merchant() {
  const [items, setItems] = useState([]);
  const [updatedItems, setUpdatedItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:8081/merchants')
        .then(response => response.json())
        .then(data => {
          setItems(data);
          setUpdatedItems(data);
        })
        .catch(error => console.error(error));
  }, []);

  const handleEdit = (item) => {
    history.push({
      pathname: '/edit/' + item.referenceUuid,
      item
    });
  };

  const handleDestroy = (referenceUuid) => {
    fetch(`http://localhost:8081/merchants/?uuid=${referenceUuid}`, {
      method: 'DELETE'
    })
        .then(response => {
          if (response.ok) {
            console.log('Merchant deleted successfully');
            // Fetch the updated list of items after deletion
            fetch('http://localhost:8081/merchants')
                .then(response => response.json())
                .then(data => setUpdatedItems(data))
                .catch(error => console.error(error));
          } else {
            throw new Error('Failed to delete merchant');
          }
        })
        .catch(error => {
          console.error(error);
        });
  };

  const handleTransactionRequest = (item) => {
    history.push({
      pathname: '/transactions' + item,
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
          {updatedItems.map((item) => (
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
                  <button
                      className="btn btn-primary"
                      onClick={() => handleDestroy(item.referenceUuid)}
                  >
                    Disable
                  </button>
                </td>
                <td>
                  <button
                      className="btn btn-primary"
                      onClick={() => handleTransactionRequest(item.referenceUuid)}
                  >
                    Transactions
                  </button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default Merchant;