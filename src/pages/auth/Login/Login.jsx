import React, { useState } from 'react'
import './Login.scss'
import { loginData } from './loginData'

import envelope from './../../../assets/pages/login-assets/envelope.svg'
import lock from './../../../assets/pages/login-assets/lock.svg'
import eye from './../../../assets/pages/login-assets/eye.svg'
import check from './../../../assets/pages/login-assets/check.png'
import { Link } from 'react-router-dom'

function Login (){

  const[remeberMe, setRememberMe] = useState(false);

  function toggleRemeber() {
    if(remeberMe)
      setRememberMe(false);
    else 
    setRememberMe(true);
  }

  return (
    <div className='login-container'>
      <div className="login-left">
        <div className="login-form-container">

          <div className="login-title">
            <h3>Log in to Tradel</h3>
            <p>Welcome back to your account</p>
          </div>

          <form action="" className='login-form'>
            <div className="email-container">
              <img src={envelope} alt="envelope" />
              <input type="email" name="email" id="email" placeholder='Email address' />
            </div>

            <div className="password-container">
              <img src={lock} alt="envelope" />
              <input type="password" name="password" id="password"  placeholder='Password'/>
              <img src={eye} alt="eye" />
            </div>

            <div className="form-checkers">
              <p>Forgot password?</p>
              <div className="remember-check">
                <div className="check-container" onClick={toggleRemeber}>  
                  {remeberMe ? <img src={check} alt="check-icon" /> : ''}
                </div>
                <p>Remember me</p>
              </div>
            </div>

            <div className="login-info">
              <div className="login-btn">
                <p>Log in</p>
              </div>
              <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
            </div>
          </form>

          <div className="login-links">
            {loginData.map((icon) => {
              return(
                <div className="icon-container" key={icon.id}>
                  <Link to={icon.to}><img key={icon.id} src={icon.src} alt={icon.alt}/></Link>
                </div>
              )
            })}
          </div>

        </div>
      </div>
      <div className="login-right">
          <div className="carts-container"></div>
          <div className="utopia-container"></div>
      </div>
    </div>
  )
}

export default Login