import React from 'react'
import '../../styles/button.scss'

const ButtonLogin = ({title, onClick, className}) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>{title}</button>
  )
}

export default ButtonLogin