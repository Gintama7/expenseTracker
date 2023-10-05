import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
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
        const obj = {title,amount,date};
        console.log(obj);
    }
    // // const inputChangeHandler=(id,value)=>{    // //    Single Function to handle all inputs
    // //    if(id=== 'title')
    // {setTitle(value);
    // }
    // // }
  return (
      <form action="" className='expenseForm'>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input type="text" onChange={titleChangeHandler}  />
                {/* <input type="text" onChange={(e)=>inputChangeHandler('title',e.target.value)}  />     Making one function to handle all changes*/}
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
        <button type='submit' onClick={submitHandler}>Submit</button>
     </div>
      </form>
   
  )
}

export default ExpenseForm
