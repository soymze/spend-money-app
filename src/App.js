import Header from './components/Header';
import Budget from './components/Budget';
import Products from './components/Products';
import Receipt from './components/Receipt';
import React, {useState} from 'react';
import './App.css';

function App() {

  const [budget, setBudget] = useState(100000000000);

  const buyProduct = (price, quantity) => {
    setBudget(budget - price * quantity);
  }

  const sellProduct = (price, quantity) => {
    setBudget(budget + price * quantity);
  }

  return (
    <div className="App">
      <Header/>
      <Budget budget={budget} />
      <Products buyProduct={buyProduct} sellProduct={sellProduct} />
      <Receipt />
    </div>
  );
}

export default App;
