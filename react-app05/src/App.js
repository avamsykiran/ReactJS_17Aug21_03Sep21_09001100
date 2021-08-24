import TxnList from './components/TxnList';

const App = ({title}) =>  (
  <main className="container-fluid p-0 m-0">
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm m-0">
      <a href="#" className="navbar-brand">{title}</a>
    </nav>
    <TxnList />
  </main>   
);

export default App;
