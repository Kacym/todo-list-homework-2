import { useState } from 'react'
import Button from '../UI/button/Button'
import './NewExpenses.css'
import ExpensesForm from '../expensesForm/ExpensesForm'


const NewExpenses = ( {setTodos} ) => {

    const [showForm, setShowForm] = useState(false)
    function openAndCloseModal() {
        setShowForm((prev) => !prev)

    }
  return (
    <div className='newExpenses'>

        {showForm ? (
            <ExpensesForm setTodos={setTodos} click={openAndCloseModal}/>
        ): (
            <Button 
                style={{
                    padding: "16px 18px",
                    width: "228px",
                    cursor: "pointer", 
                    marginLeft: "30%", 
                    marginTop: "10%"
                }} 
                title="Добавить новый расход"
                click={openAndCloseModal}
        />
        )}
        </div>
  )
}

export default NewExpenses