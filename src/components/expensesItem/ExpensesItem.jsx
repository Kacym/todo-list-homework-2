import React from 'react'
import "./ExpensesItem.css"

const ExpensesItem = ( {todo} ) => {
  return (
    <li key={todo.id}>
      <div className="product__info">
        <div className="dateAndAmount">
        <p>{todo.month}</p>
        <p>{todo.year}</p>
        <p>{todo.day}</p>
      </div>
        <p className='product__name'>{todo.title}</p>
      </div>
      <div className="price">
        <p>{todo.price}</p>
      </div>
    </li>
  )
}

export default ExpensesItem