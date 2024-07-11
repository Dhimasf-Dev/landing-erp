import React from 'react'
import '../../styles/title-section.scss'

const TitleSection = ({title}) => {
  return (
    <div className='flex-center container-title'>
        <h1>{title}</h1>
    </div>
  )
}

export default TitleSection