import React, { useState } from 'react'
import './ExpensesForm.css'
import Input from '../UI/input/Input'
import Label from '../UI/label/Label'
import Button from '../UI/button/Button'
import { products } from '../utils/constant'


const MainContent = ( {click} ) => {

    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState("");
    const [inputNumber, setInputNumber] = useState(0);
    const [inputDate, setInputDate] = useState(null);

    function addTask() {
        const newItem = {
            id: Math.floor(Math.random() * 100000),
            title: inputText,
            amount: inputNumber,
            date: inputDate,
        }
        setTodos([...todos, newItem])
        products.push(newItem)
        console.log(products);
    }

    function textInputValue(e) {
        // console.log(e.target.value);
        setInputText(e.target.value)
    }

    function numberInputValue(e) {
        setInputNumber(e.target.value)
    }
    
    function dateInputValue(e) {
        setInputDate(e.target.value);
    }

  return (
    <div className='mainContent'>
        
        <div className="firstLineDiv">
            <div>
                <Label id={"title"} title={"Заголовок"}/>
                <br />
                <Input id={"title"} type={'text'} onChange={textInputValue}/>          
        </div>
            <div className='InputsAmout'>
                <Label id={"amount"} title={"Количество"}/>
                <br />
                <Input id={"amount"} type={'number'} onChange={numberInputValue}/>
                </div>
            </div>
            <br />
        <div>
            <Label id={"date"} title={"Датировать"} onChange={dateInputValue}/>
            <br />
            <Input id={"date"} type={'date'} style={{paddingRight: '5px'}}/>
        </div>
        <div className="buttons">
            <Button click={click} title="Отмена"/>
            <Button click={addTask} title="Добавить расходы"/>
        </div>
        
    </div>
  )
}

export default MainContent