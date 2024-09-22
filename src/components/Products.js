import React from 'react';
import './Products.css';
import Bigmac from '../media/big-mac.jpg';

function Products() {
  return (
    <div className='container'>
      <div class="item1 card">
        <img src={Bigmac} />
        <h3>Bigmac</h3>
        <h3>10$</h3>
        <div className='buttons'>
          <button>SELL</button>
          <input></input>
          <button>BUY</button>
        </div>
      </div>
      
      <div class="item1 card">
        <img src={Bigmac} />
        <h3>Bigmac</h3>
        <h3>10$</h3>
        <div className='buttons'>
          <button>SELL</button>
          <input></input>
          <button>BUY</button>
        </div>
      </div>

      <div class="item1 card">
        <img src={Bigmac} />
        <h3>Bigmac</h3>
        <h3>10$</h3>
        <div className='buttons'>
          <button>SELL</button>
          <input></input>
          <button>BUY</button>
        </div>
      </div>
    </div>
  )
}

export default Products