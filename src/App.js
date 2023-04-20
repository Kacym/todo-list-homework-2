import "./App.css"
import ExpensesItem from "./components/expensesItem/ExpensesItem";
import NewExpenses from './components/newExpenses/NewExpenses';
import { useState } from "react";
import { products } from "./components/utils/constant";

function App() {
  const [todos, setTodos] = useState(products);


  return (
    <div className="App">
      <NewExpenses setTodos={setTodos} />
      <ul>
      {
        todos.map((todo)=> {
          return <ExpensesItem 
            todo={todo}
            key={todo.id}
            title={todo.title}
            price={todo.price}
            date={todo.date}/>
        })
      }
      </ul>
    </div>
  );
}

export default App;
