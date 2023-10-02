import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
const expenseDate= new Date(2023,2,10);
const expenseTitle = 'Car Insurance';
const expenseAmount = 294.67;
const locationOfExpenditure = 'Mall';
  return (
    <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
      <h2>{expenseTitle}</h2>
      <div className="expense-item__price">{expenseAmount}</div>
      <div>{locationOfExpenditure}</div>
      </div>
      
    </div>
  )
}

export default ExpenseItem
