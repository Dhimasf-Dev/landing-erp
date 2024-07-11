import React from 'react'
import '../../styles/input.scss'

const Inputs = ({title, type}) => {
  return (
    <input className='inputs' type={type} placeholder={`Input ${title}`} />
  )
}

export default Inputs