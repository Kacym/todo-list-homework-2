import React from 'react';
import './Button.css'

const Button = ({title, click, style}) => {
  return (
    <button style={style} onClick={click}>{title}</button>
  )
}

export default Button