import React, { useState } from 'react';
import './Products.css';
import Bigmac from '../media/big-mac.jpg';
import Flipflop from '../media/flip-flops.jpg';
import Coke from '../media/coca-cola-pack.jpg';
import MovieTicket from '../media/movie-ticket.jpg';
import Book from '../media/book.jpg';
import Lobster from '../media/lobster-dinner.jpg';
import Video from '../media/video-game.jpg';
import Amazon from '../media/amazon-echo.jpg';
import Netflix from '../media/year-of-netflix.jpg';
import Air from '../media/air-jordans.jpg';
import Airpods from '../media/airpods.jpg';
import Gaming from '../media/gaming-console.jpg';
import Drone from '../media/drone.jpg';
import Smartphone from '../media/smartphone.jpg';
import Bike from '../media/bike.jpg';
import Kitten from '../media/kitten.jpg';
import Puppy from '../media/puppy.jpg';
import Horse from '../media/horse.jpg';
import Designer from '../media/designer-handbag.jpg';
import Hot from '../media/hot-tub.jpg';
import Luxury from '../media/luxury-wine.jpg';
import Diamond from '../media/diamond-ring.jpg';
import Jet from '../media/jet-ski.jpg';
import Rolex from '../media/rolex.jpg';
import Ford from '../media/ford-f-150.jpg';
import Tesla from '../media/tesla.jpg';
import Ferrari from '../media/ferrari.jpg';
import Monster from '../media/monster-truck.jpg';
import Helicopter from '../media/apache-helicopter.jpg';
import Super from '../media/superbowl-ad.jpg';
import Yacht from '../media/yacht.jpg';
import Mansion from '../media/mansion.jpg';
import Skyscraper from '../media/skyscraper.jpg';
import Cruise from '../media/cruise-ship.jpg';
import NBA from '../media/nba-team.jpg';

function Products({ buyProduct, sellProduct, purchasedQuantities }) {
  const products = [
    { id: 1, name: 'Big Mac', price: 2, image: Bigmac },
    { id: 2, name: 'Flip Flops', price: 3, image: Flipflop },
    { id: 3, name: 'Coca-Cola Pack', price: 5, image: Coke },
    { id: 4, name: 'Movie Ticket', price: 12, image: MovieTicket },
    { id: 5, name: 'Book', price: 15, image: Book },
    { id: 6, name: 'Lobster Dinner', price: 45, image: Lobster },
    { id: 7, name: 'Video Game', price: 60, image: Video },
    { id: 8, name: 'Amazon Echo', price: 99, image: Amazon },
    { id: 9, name: 'Year of Netflix', price: 100, image: Netflix },
    { id: 10, name: 'Air Jordans', price: 125, image: Air },
    { id: 11, name: 'Airpods', price: 199, image: Airpods },
    { id: 12, name: 'Gaming Console', price: 299, image: Gaming },
    { id: 13, name: 'Drone', price: 350, image: Drone },
    { id: 14, name: 'Smartphone', price: 699, image: Smartphone },
    { id: 15, name: 'Bike', price: 800, image: Bike },
    { id: 16, name: 'Kitten', price: 1500, image: Kitten },
    { id: 17, name: 'Puppy', price: 1500, image: Puppy },
    { id: 18, name: 'Horse', price: 2500, image: Horse },
    { id: 19, name: 'Designer Handbag', price: 5500, image: Designer },
    { id: 20, name: 'Hot Tub', price: 6000, image: Hot },
    { id: 21, name: 'Luxury Wine', price: 7000, image: Luxury },
    { id: 22, name: 'Diamond Ring', price: 10000, image: Diamond },
    { id: 23, name: 'Jet Ski', price: 12000, image: Jet },
    { id: 24, name: 'Rolex', price: 15000, image: Rolex },
    { id: 25, name: 'Ford F-150', price: 30000, image: Ford },
    { id: 26, name: 'Tesla', price: 75000, image: Tesla },
    { id: 27, name: 'Ferrari', price: 250000, image: Ferrari },
    { id: 28, name: 'Monster Truck', price: 1500000, image: Monster },
    { id: 29, name: 'Helicopter', price: 3000000, image: Helicopter },
    { id: 30, name: 'Super Bowl Ad', price: 5000000, image: Super },
    { id: 31, name: 'Yacht', price: 10000000, image: Yacht },
    { id: 32, name: 'Mansion', price: 50000000, image: Mansion },
    { id: 33, name: 'Skyscraper', price: 850000000, image: Skyscraper },
    { id: 34, name: 'Cruise Ship', price: 1200000000, image: Cruise },
    { id: 35, name: 'NBA Team', price: 2000000000, image: NBA }
  ];

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, value) => {
    const newValue = Math.max(Number(value), 1); 
    setQuantities(prev => ({ ...prev, [id]: newValue }));
  };

  return (
    <div className='container'>
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <h4>${product.price}</h4>
          <div className='buttons'>
            <button 
              className='sell-btn' 
              onClick={() => sellProduct(product.price, quantities[product.id] || 1, product.id)} 
              disabled={!purchasedQuantities[product.id] || purchasedQuantities[product.id] < quantities}
            >
              SELL
            </button>
            <input 
              type="number" 
              value={quantities[product.id] || 1} 
              onChange={(e) => handleQuantityChange(product.id, e.target.value)} 
              min="1" 
            />
            <button className='buy-btn' onClick={() => buyProduct(product.price, quantities[product.id] || 1, product.id, product.name)}>BUY</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
