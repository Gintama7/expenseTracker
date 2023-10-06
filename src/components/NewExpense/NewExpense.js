import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);

  const showFormHandler =()=>{
    setShowForm(true);
  }

  const onSaveExpenseHandler = (enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
   props.onAddExpense(expenseData); 
  setShowForm(false);
 }

  return (
    <div className='new-expense'>
      {showForm ? (<ExpenseForm onSaveExpenseData={onSaveExpenseHandler} cancelBtn={setShowForm}/>)
       :
       <button onClick={showFormHandler}>
        Add New Expense
        </button> }
      
    </div>
  )
}

export default NewExpense
