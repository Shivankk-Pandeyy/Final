import React from 'react'
import './App.css'
import cart from './cart.png'
import logo from './logo.png'
import user from './user.png'
import save from './save.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='navbar'>
    <div className='name'>
    <img src={logo} alt='LOGO'></img>
    <p>Harvin<br/>Chairs</p>
    </div>
    <div className='links'>
    <NavLink to='/'>Home</NavLink>
    <a href='#'>About Us</a>
    <a href='#'>Categories</a>
    <a href='#'>Offers and Deals</a>
    <a href='#'>Contact</a>
    </div>
    <div className='logo'>
    <img src={cart} alt='shopping' title='Add To Cart'></img>
    <img src={user} alt='shopping' title='User Pannel'></img>
    <img src={save} alt='shopping' title='Save Later'></img>
    </div>
    </div>
  )
}

export default Header
