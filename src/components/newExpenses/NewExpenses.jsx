import { useState } from 'react'
import Button from '../UI/button/Button'
import './NewExpenses.css'
import MainContent from '../expensesForm/ExpensesForm'

const NewExpenses = () => {
    const [showForm, setShowForm] = useState(false)
    function openAndCloseModal() {
        setShowForm((prev) => !prev)

    }
  return (
    <div className='newExpenses'>
        <div className='newExpensesContainer'>

        

        {showForm ? (
            <MainContent click={openAndCloseModal}/>
        ): (
            <Button 
                style={{padding: "16px 18px", width: "228px", cursor: "pointer"}} 
                title="Добавить новый расход"
                click={openAndCloseModal}
        />
        )}
        </div>
    </div>
  )
}

export default NewExpenses