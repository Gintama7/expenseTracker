import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';


const Expenses=(props)=> {
  const [filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = (props.items.filter(item=>{
    return item.date.getFullYear().toString() === filteredYear ;
  }))
  
 

  // if(filteredExpenses.length === 1)
  // {
  //   expensesContent = <div>{filteredExpenses.map((item) =>(
  //     <ExpenseItem 
  //     key={item.id}
  //     title={item.title}
  //     amount={item.amount}
  //     date={item.date}
  //     // location= {expense.location}
  //     />
  //   ))}
  //   <p>Only single Expense here. Please add more...</p>
  //   </div>
  // }else 
  
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}

export default Expenses
