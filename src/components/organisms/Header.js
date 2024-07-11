import React, { useState } from 'react';
import '../../styles/header.scss'
import Buttons from '../atoms/Buttons'
import ButtonLink from '../atoms/ButtonLink'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoginTrue } from '../../redux/slice/loginSlice';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const redirectToLogin = () => {
    dispatch(setIsLoginTrue());
    navigate("/login")
  };

  return (
    <div className='container-header flex-between'>
        <div className='container-logo'>
            <img src='/images/logo.png' alt='logo' />
            <h3>HOME</h3>
        </div>
        <div className={isOpen ? 'nav-open' : 'nav'}>
            <ButtonLink linkTo="/#about-section" title="About" />
            <ButtonLink linkTo="/#pricing-section" title="Pricing" />
            <ButtonLink linkTo="/#contact-section" title="Contact" />
            {
              isLogin &&
              <Buttons onClick={redirectToLogin} title="LOGIN" />
            }
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={isOpen ? 'line open' : 'line'}></div>
          <div className={isOpen ? 'line open' : 'line'}></div>
          <div className={isOpen ? 'line open' : 'line'}></div>
        </div>

        <div className='shape-header'></div>
    </div>
  )
}

export default Header