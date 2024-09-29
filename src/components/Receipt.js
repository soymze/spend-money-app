import React from 'react';
import './Receipt.css';

function Receipt({ purchasedQuantities }) {
  const total = Object.values(purchasedQuantities).reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className='receipt-container'>
      <h1>Your Receipt</h1>
      <div className='details'>
        {Object.keys(purchasedQuantities).length === 0 ? (
          <p>No products purchased yet.</p>
        ) : (
          Object.entries(purchasedQuantities).map(([productId, product]) => (
            product.quantity > 0 && ( // Sadece miktarı sıfırdan büyük olan ürünleri göster
              <div key={productId}>
                <span>{product.name} (x{product.quantity}) - ${product.price * product.quantity}</span>
              </div>
            )
          ))
        )}
      </div>
      <hr />
      <div className='total'>
        Total: ${total}
      </div>
    </div>
  );
}

export default Receipt;
