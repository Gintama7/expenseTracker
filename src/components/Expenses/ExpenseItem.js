import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem=(props) =>{
  const [title,setTitle] = useState(props.title);
  
  const clickHandler=()=>{
    // e.target.parentElement.remove(); for removing the element
    setTitle('Updated');

   }

  return (

    <li>
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <ExpenseDetails amount={props.amount}  location={props.location}   title={title} />
         {/* <button onClick={clickHandler}>Remove Item</button> */}
         <button onClick={clickHandler}>Change Title</button>
    </Card>
    </li>
  )
}

export default ExpenseItem
