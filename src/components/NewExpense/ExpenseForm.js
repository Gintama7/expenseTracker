import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     title = '',
    //     amount='',
    //     date=''
    // })
   const titleChangeHandler = (e)=>{
        // setUserInput((prevState) =>{
        //     return {...prevState, title : e.target.value};
        // })
        setTitle(e.target.value);
    }
    const amountChangeHandler = (e)=>{
        setAmount(e.target.value);
    }
    const dateChangeHandler = (e)=>{
        setDate(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const obj = {title:title,amount:amount,date:new Date(date)};
        props.onSaveExpenseData(obj);
        setTitle('');
        setAmount('');
        setDate('');
    }

  return (
      <form action="" className='expenseForm' onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input type="text"
                value={title}
                 onChange={titleChangeHandler}  />

            </div>
            <div className="new-expense__control">
                <label >Amount</label>
                <input type="number"
                 value={amount}  onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label >Date</label>
                <input type="date"
                 value={date} onChange={dateChangeHandler} />
            </div>
        </div>
     
     <div className="new-expense__actions">
        <button type='submit' >Submit</button>
     </div>
      </form>
   
  )
}

export default ExpenseForm
