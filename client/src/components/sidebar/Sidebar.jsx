import React from 'react'
import './sidebar.less'
import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/userReducer'
import Logo from '../../assets/img/logo.png'
import SecondaryButton from '../UI/secondaryButton/SecondaryButton'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const dispatch = useDispatch()

  return (
    <div className='sidebar'>
        <div className="sidebar__content">
          <NavLink to="/">
            <div className="sidebar__header">
              <img src={Logo} alt="" className="sidebar__logo"/>
              MERN cloud
            </div>
          </NavLink>
          <div className="sidebar__logout" onClick={() => dispatch(logout())}>
            <SecondaryButton>Log out</SecondaryButton>
          </div>
        </div>
    </div>
  )
}

export default Sidebar