import React from 'react'
import '../../styles/label.scss'

const Label = ({field, value}) => {
  return (
    <div>
        <h3>{field}</h3>
        <div>
            {value}
        </div>
    </div>
  )
}

export default Label