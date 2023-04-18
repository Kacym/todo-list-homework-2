import "./App.css"
import ExpensesItem from "./components/expensesItem/ExpensesItem";
import NewExpenses from './components/newExpenses/NewExpenses';
import { products } from "./components/utils/constant";

function App() {

  return (
    <div className="App">
      <NewExpenses />
      <ul>
      {
        products.map((todo)=> {
          return <ExpensesItem 
            todo={todo}
            key={todo.id}
            title={todo.title}
            amount={todo.amount}
            date={todo.date}/>
        })
      }
      </ul>
    </div>
  );
}

export default App;
