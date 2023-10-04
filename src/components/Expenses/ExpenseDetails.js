import React, { useState } from 'react'

const ExpenseDetails=(props) => { 
  
  const [price,setPrice] = useState(props.amount);

  const clickHandler =()=>{
    setPrice('100');
  }

  return (
   
    <div className='expense-item__description'>
    <h2>{props.title}</h2>
    <h3>{props.location}</h3>
    <div className="expense-item__price">{price}</div>
    <button onClick={clickHandler}>Change Price</button>
    </div>
    
  )
}

export default ExpenseDetails
