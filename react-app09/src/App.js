import { BrowserRouter as Router, Route, Switch, Link,Redirect } from 'react-router-dom'
import NewTxn from './txns/components/NewTxn';
import TxnList from './txns/components/TxnList';
import UserList from './users/components/UserList'

const App = ({ title }) => (
  <main className="container-fluid p-0 m-0">
    <Router>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm m-0">
        <Link to="/" className="navbar-brand">{title}</Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/users" className="nav-link">Users List</Link>
          </li>
          <li className="nav-item">
            <Link to="/txns" className="nav-link">Transactions List</Link>
          </li>
          <li className="nav-item">
            <Link to="/addTxn" className="nav-link">New Transaction</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact > <Redirect to="/users" /> </Route>
        <Route path="/users" exact > <UserList /> </Route>
        <Route path="/txns" exact > <TxnList /> </Route>
        <Route path="/addTxn" exact ><NewTxn /> </Route>
      </Switch>

    </Router>
  </main>
);

export default App;
