import React from 'react'

const ExpenseDetails=(props) => {
  
  const clickHandler=(e)=>{
    e.preventDefault();
    const mainDiv = document.querySelector('.details');
    let subDiv = e.target.parentElement;
     mainDiv.removeChild(subDiv);
  }
  return (
    <div className='details'>
    <div className='expense-item__description'>
    <h2>{props.title}</h2>
    <h3>{props.location}</h3>
    <div className="expense-item__price">{props.amount}</div>
     <button onClick={clickHandler}>Delete Item</button>
    </div>
    </div>
  )
}

export default ExpenseDetails
