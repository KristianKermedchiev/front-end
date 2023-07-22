import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Merchant from './Merchant';
import Transactions from './Transactions';
import EditMerchant from "./Edit";
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <Router>
      <div>      
        <Switch>
          <Route exact path="/merchants" component={Merchant} />
          <Route exact path="/transactions/:uuid" component={Transactions} />
          <Route exact path="/edit/:uuid" component={EditMerchant} />
          <Route path="/">
            <div className="container d-flex justify-content-center align-items-center vh-100">
              <div className="text-center">
                <h1>Welcome to the App</h1>
                <div className="my-4">
                  <Link to="/merchant" className="btn btn-primary mx-2">Merchant</Link>
                  <Link to="/transactions" className="btn btn-primary mx-2">Transactions</Link>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
