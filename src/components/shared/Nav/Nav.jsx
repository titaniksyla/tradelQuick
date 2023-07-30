import React from 'react'
import {Link} from 'react-router-dom';
import { linksData } from './navData';
import { downloadData } from './navData';
import './Nav.scss';

import {GiHamburgerMenu} from 'react-icons/gi';

function Nav () {
  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <div className='nav-iconn'>
          <Link className='nav-icon' to='/'></Link>
        </div>
        <div className='nav-links'>
          {linksData.map((props) => {
            return(
              <div className='nav-link' key={props.id}>
                <Link to={props.to}> {props.title} {props.drop}</Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className='nav-right'>
        <div className='nav-download'>
        {downloadData.map((props) => {
        return(
          <Link key={props.id} to={props.to}><img className='button-icon' src={props.icon} alt={props.alt}></img> {props.title}</Link>
        )
        })}
        </div>
        <div className='nav-auth'>
          <Link to='/login' className='btn uncolored-btn'>Log in</Link>
          <Link to='/signup' className='btn colored-btn'>Sign up</Link>
        </div>
      </div>
      <div className="nav-hamburger" >
        <GiHamburgerMenu size={30} />
      </div>
    </div>
  )
}

export default Nav
