import { React } from 'react';
import { Link } from 'react-router-dom';

function Transactions(props) {
  const [items, setItems] = useState([]);
  
  const UID = props;

  useEffect(() => {
    fetch('http://localhost:8081 /transaction/get-all/' + UID)
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error(error));
  }, []);


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
          {items.map((item, index) => (
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
