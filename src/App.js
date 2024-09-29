import Header from './components/Header';
import Budget from './components/Budget';
import Products from './components/Products';
import Receipt from './components/Receipt';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [budget, setBudget] = useState(100000000000);
  const [purchasedQuantities, setPurchasedQuantities] = useState({});

  const buyProduct = (price, quantity, productId, productName) => {
    setBudget(prevBudget => prevBudget - price * quantity);


    setPurchasedQuantities(prev => ({
      ...prev,
      [productId]: {
        name: productName,
        quantity: (prev[productId]?.quantity || 0) + quantity,
        price: price,
      },
    }));

    console.log(`Bought ${quantity} of product ${productId} for ${price * quantity}`);
  };

  const sellProduct = (price, quantity, productId) => {
    if (purchasedQuantities[productId]?.quantity >= quantity) {
      setBudget(prevBudget => prevBudget + price * quantity);

      
      setPurchasedQuantities(prev => ({
        ...prev,
        [productId]: {
          ...prev[productId],
          quantity: prev[productId].quantity - quantity,
        },
      }));

      console.log(`Sold ${quantity} of product ${productId} for ${price * quantity}`);
    } else {
      console.log('Not enough product to sell');
    }
  };

  return (
    <div className="App">
      <Header />
      <Budget budget={budget} />
      <Products
        buyProduct={buyProduct}
        sellProduct={sellProduct}
        purchasedQuantities={purchasedQuantities}
      />
      <Receipt purchasedQuantities={purchasedQuantities} /> {/* Receipt'e satın alınan ürünleri geçir */}
    </div>
  );
}

export default App;
