import React from 'react'
import "./ExpensesItem.css"

const ExpensesItem = ( {todo} ) => {
  return (
    <li key={todo.id}>
        <p>{todo.title}</p>
        <p>{todo.amount}</p>
        <p>{todo.date}</p>
    </li>
  )
}

export default ExpensesItem