import React, {useState} from 'react'
import './Signup.scss'

import { loginData } from './../Login/loginData'

import user from './../../../assets/pages/signup-assets/account.png'
import envelope from './../../../assets/pages/login-assets/envelope.svg'
import lock from './../../../assets/pages/login-assets/lock.svg'
import closedLock from './../../../assets/pages/signup-assets/Icon feather-lock.png'
import eye from './../../../assets/pages/login-assets/eye.svg'
import check from './../../../assets/pages/login-assets/check.png'
import { Link } from 'react-router-dom'

function Signup (){

  const[remeberMe, setRememberMe] = useState(false);

  function toggleRemeber(){
    if(remeberMe)
      setRememberMe(false);
    else 
      setRememberMe(true);
  }

  return (
    <div className='signup-container'>
      <div className="signup-left">
        <div className="signup-form-container">

          <div className="signup-title">
            <h3>Create Account</h3>
            <p>Create your free account and enjoy tradel.</p>
          </div>

          <form action="" className='signup-form'>

          <div className="fullname-container">
              <img src={user} alt="envelope" />
              <input type="text" name="name" id="name" placeholder='Full name' />
            </div>

            <div className="email-container">
              <img src={envelope} alt="envelope" />
              <input type="email" name="email" id="email" placeholder='Email address' />
            </div>

            <div className="password-container">
              <img src={lock} alt="envelope" />
              <input type="password" name="password" id="password"  placeholder='Password'/>
              <img src={eye} alt="eye" />
            </div>

            <div className="confirm-password-container">
              <img src={closedLock} alt="envelope" />
              <input type="password" name="password" id="password"  placeholder='Confirm Password'/>
              <img src={eye} alt="eye" />
            </div>

            <div className="form-checkers">
              <div className="remember-check">
                <div className="check-container" onClick={toggleRemeber}>
                  {remeberMe ? <img src={check} alt="check-icon" /> : ''}
                </div>
                <p>I agree to our <Link to='/'>Terms & Conditions</Link> and <Link to='/'>Privacy Policy</Link></p>
              </div>
            </div>

            <div className="signup-info">
              <div className="signup-btn">
                <p>Sign up</p>
              </div>
              <p>Already have an account? <Link to='/login'>Log In</Link></p>
            </div>
          </form>

          <div className="signup-links">
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
      <div className="signup-right">
          <div className="test-container"></div>
          <div className="chair-container"></div>
          <div className="rocket-container"></div>
      </div>
    </div>
  )
}

export default Signup