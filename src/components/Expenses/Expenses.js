import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';


const Expenses=(props)=> {
  const [filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = (props.items.filter(item=>{
    return item.date.getFullYear().toString() === filteredYear ;
  }))
  
  let expensesContent = <p>No expenses found</p>;

  if(filteredExpenses.length === 1)
  {
    expensesContent = <div>{filteredExpenses.map((item) =>(
      <ExpenseItem 
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
      // location= {expense.location}
      />
    ))}
    <p>Only single Expense here. Please add more...</p>
    </div>
  }else if(filteredExpenses.length >1)
  {
    expensesContent = filteredExpenses.map((item) =>(
      <ExpenseItem 
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
      // location= {expense.location}
      />
    ))
  }
  
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {expensesContent}
    </Card>
  )
}

export default Expenses
