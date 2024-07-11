import React from 'react'
import '../../styles/button.scss'
import { Link } from 'react-router-dom';

const ButtonLink = ({linkTo, title}) => {
  return (
    <Link className='btn-link' to={linkTo}>
      <h3>{title}</h3>
    </Link>
  )
}

export default ButtonLink