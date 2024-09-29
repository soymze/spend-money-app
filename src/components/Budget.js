import React from 'react';
import './Budget.css';

function Budget({budget}) {
  return (
    <div className='budget-container'>
      <h1 className='money'>${budget.toLocaleString()}</h1>
    </div>
  )
}

export default Budget