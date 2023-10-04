import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';


const Expenses=()=> {

    const expenses = [
        {
          id: "e1",
          title: "Toilet Paper",
          amount: 94.12,
          date: new Date(2020, 7, 14),
          location: "store",
        },
        { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), location: "mall", },
        {
          id: "e3",
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2021, 2, 28),
          location: "bank",
        },
        {
          id: "e4",
          title: "New Desk (Wooden)",
          amount: 450,
          date: new Date(2021, 5, 12),
          location: "mall",
        },
      ];
  return (
    <Card className='expenses'>
       {
        expenses.map((expense) =>(
          <ExpenseItem title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location= {expense.location}/>
        ))
      }
    </Card>
  )
}

export default Expenses