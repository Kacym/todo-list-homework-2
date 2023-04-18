import React from 'react'
import './Input.css'

const Input = ({type, id, style, onChange, value}) => {
  return (
    <input 
      type={type} 
      id={id} 
      style={style} 
      value={value} 
      onChange={onChange}/>
  )
}

export default Input