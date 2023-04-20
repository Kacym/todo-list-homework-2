import React, { useState } from 'react'
import './ExpensesForm.css'
import Input from '../UI/input/Input'
import Label from '../UI/label/Label'
import Button from '../UI/button/Button'


const ExpensesForm = ( {click, setTodos} ) => {

    const [inputText, setInputText] = useState();
    const [inputNumber, setInputNumber] = useState();
    const [inputDate, setInputDate] = useState();

    const fullDate = new Date(inputDate);

    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август",
        "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

    function addTask() {
        const newItem = {
            id: Math.floor(Math.random() * 100000),
            title: inputText,
            price: `$ ${inputNumber},00`,
            day: fullDate.getDate(),
            month: monthNames[fullDate.getMonth()],
            year: fullDate.getFullYear(),
        }
        setTodos((prevTodos)=>{
            return (
                [...prevTodos, newItem]
            )
        })

    }

    function textInputValue(e) {
        setInputText(e.target.value)
    }

    function numberInputValue(e) {
        setInputNumber(e.target.value)
    }
    
    function dateInputValue(e) {
        setInputDate(e.target.value);
    }

  return (
    <div className='ExpensesForm'>
        
        <div className="firstLineDiv">
            <div>
                <Label id={"title"} title={"Заголовок"}/>
                <br />
                <Input id={"title"} type={'text'} onChange={textInputValue}/>          
        </div>
            <div className='InputsAmout'>
                <Label id={"amount"} title={"Цена"}/>
                <br />
                <Input id={"amount"} type={'number'} onChange={numberInputValue}/>
                </div>
            </div>
            <br />
        <div>
            <Label id={"date"} title={"Датировать"} />
            <br />
            <Input id={"date"} type={'date'} style={{paddingRight: '5px'}} onChange={dateInputValue}/>
        </div>
        <div className="buttons">
            <Button click={click} title="Отмена"/>
            <Button click={addTask} title="Добавить расходы"/>
        </div>
        
    </div>
  )
}

export default ExpensesForm