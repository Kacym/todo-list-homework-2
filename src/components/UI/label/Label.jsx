import React from 'react';
import './Label.css'

const Label = ({id,title}) => {
  return (
    <label htmlFor={id}>{title}</label>
  )
}

export default Label