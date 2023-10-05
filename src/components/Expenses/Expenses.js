import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';


const Expenses=(props)=> {
  
  
  return (
    <Card className='expenses'>
       {
        props.items.map((item) =>(
          <ExpenseItem title={item.title}
          amount={item.amount}
          date={item.date}
          // location= {expense.location}
          />
        ))
      }
    </Card>
  )
}

export default Expenses
