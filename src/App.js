import React from 'react';
import './App.css';
import Title from './components/Title';
import Balance from "./components/Balance";
import AddTransaction from './components/AddTransaction';
import Chart from './components/Chart';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Title />
      </header>
      <main className="app-main">
        <Balance />
        <Chart />
        <AddTransaction />
        <TransactionList />
      </main>
    </div>
  );
}

export default App;
