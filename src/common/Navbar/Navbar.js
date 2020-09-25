import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../resources/logo.png'
import './Navbar.scss'

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={logo} alt='Logo' />
      <div>
        <Link to='/'>Home</Link> 
        <Link to='/about'>About us</Link>
      </div>
    </div>
  )
}
