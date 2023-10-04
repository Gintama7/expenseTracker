import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem=(props) =>{
  
  const clickHandler=(e)=>{
    e.target.parentElement.remove();    
   }

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
         <button onClick={clickHandler}>Remove Item</button>
    </Card>
  )
}

export default ExpenseItem
