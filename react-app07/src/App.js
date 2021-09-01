import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NewTxn from './components/NewTxn';
import TxnList from './components/TxnList';

const App = ({ title }) => (
  <main className="container-fluid p-0 m-0">
    <Router>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm m-0">
        <Link to="/" className="navbar-brand">{title}</Link>

        <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/" className="nav-link">Transactions List</Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">New Transaction</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={TxnList} />
        <Route path="/add" component={NewTxn} />
      </Switch>

    </Router>
  </main>
);

export default App;
