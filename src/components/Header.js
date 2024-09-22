import React from 'react';
import ProfilePhoto from '../media/ben.jpg';
import './Header.css';

function Header() {
  return (
    <div className='header-banner'>
      <img src={ProfilePhoto} />
      <h1>Spend Money App</h1>
    </div>
  )
}

export default Header