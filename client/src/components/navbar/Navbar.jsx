import React from 'react'
import './navbar.less'
import Logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Input from '../UI/input/Input'

const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  

  return (
    <div className='navbar'>
      <div className="navbar__content">
      {!isAuth ? 
        <>
          <div className="navbar__header">
            <img src={Logo} alt="" className="navbar__logo"/>
            MERN cloud
          </div>
          <div className="navbar__btns">
            <div className="navbar__login"><NavLink to="/login">Log in</NavLink></div>
            <div className="navbar__registration"><NavLink to="/registration">Sign up</NavLink></div>
          </div>
        </>
        :
        <>
          <div className="navbar__header">
            <Input type='search' placeholder="Type to search..."/>
          </div>
          <div className="navbar__btns">user name</div>
        </>
      }
        </div>
      

        
    </div>
  )
}

export default Navbar