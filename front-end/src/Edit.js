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
        // Perform the update logic here, using the form field values (updatedName, updatedEmail, updatedDescription, updatedTotal)

        // Redirect to the Merchant page after updating
        history.push('/merchant');
    };

    const handleCancel = () => {
        // Redirect to the Merchant page without performing any updates
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
                        value={name}
                        onChange={(e) => setUpdatedName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setUpdatedEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <input
                        className="form-control"
                        value={description}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                    ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Total:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={totalTransactionSum}
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