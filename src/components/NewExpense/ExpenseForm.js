import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');
   const titleChangeHandler = (e)=>{
        setTitle(e.target.value);
    }
    const amountChangeHandler = (e)=>{
        setAmount(e.target.value);
    }
    const dateChangeHandler = (e)=>{
        setDate(e.target.value);
    }
  return (
      <form action="" className='expenseForm'>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input type="text" onChange={titleChangeHandler}  />
            </div>
            <div className="new-expense__control">
                <label >Amount</label>
                <input type="number"  onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label >Date</label>
                <input type="date" onChange={dateChangeHandler} />
            </div>
        </div>
     
     <div className="new-expense__actions">
        <button type='submit'>Submit</button>
     </div>
      </form>
   
  )
}

export default ExpenseForm
