import React from 'react'
import '../../styles/footer.scss'
import ButtonLink from '../atoms/ButtonLink'

const Footer = () => {
  return (
    <div className='container-footer flex-end'>
      <ButtonLink linkTo="/#about-section" title="About" />
      <ButtonLink linkTo="/#pricing-section" title="Pricing" />
      <ButtonLink linkTo="/#contact-section" title="Contact" />
    </div>
  )
}

export default Footer