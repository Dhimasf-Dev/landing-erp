import React from 'react'
import Card from '../molecules/Card'
import '../../styles/login.scss'
import Inputs from '../atoms/Inputs'
import ButtonLoginButton from '../atoms/Buttons'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoginFalse } from '../../redux/slice/loginSlice'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setIsLoginFalse());
    navigate('/');
  }
  return (
    <div className='container-login flex-center'>
      <Card className="container-card-login">
        <h1>Login</h1>  

        <div className='input-section'>
          <h3>Email</h3>
          <Inputs title="Email" type="text" />
        </div>
        <div className='input-section'>
          <h3>Password</h3>
          <Inputs title="Password" type="password" />
        </div>

        <ButtonLoginButton onClick={handleLogin} className="btn-login" title="Login" />
      </Card>
    </div>
  )
}

export default Login