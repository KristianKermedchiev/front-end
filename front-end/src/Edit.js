import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditMerchant(props) {
    const history = useHistory();

    const item = props.location.item
    console.log(item)
    const { name, email, description, totalTransactionSum } = item;

    const [updatedName, setUpdatedName] = useState(name);
    const [updatedEmail, setUpdatedEmail] = useState(email);
    const [updatedDescription, setUpdatedDescription] = useState(description);
    const [updatedTotal, setUpdatedTotal] = useState(totalTransactionSum);

    const handleUpdate = () => {
        const updatedData = {
          name: updatedName,
          email: updatedEmail,
          description: updatedDescription,
          total: updatedTotal,
        };
      
        fetch(`http://localhost:8081/merchant/update/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        })
          .then(response => {
            if (response.ok) {
              console.log('Merchant updated successfully');
              history.push('/merchant');
            } else {
              throw new Error('Failed to update merchant');
            }
          })
          .catch(error => {
            console.error(error);
          });
      };
    const handleCancel = () => {
        history.push('/merchant');
    };

    return (
        <div className="container mt-4 text-center">
            <h1>Edit Merchant</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={updatedEmail}
                        onChange={(e) => setUpdatedEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <input
                        className="form-control"
                        value={updatedDescription}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                    ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Total:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={updatedTotal}
                        onChange={(e) => setUpdatedTotal(e.target.value)}
                    />
                </div>
                <div>
                    <button className="btn btn-primary me-2" onClick={handleUpdate}>
                        Update
                    </button>
                    <button className="btn btn-secondary" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditMerchant;