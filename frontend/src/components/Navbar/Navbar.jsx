import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'; 


export const Navbar = () => {

  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar' >

      <img src={assets.logo} alt="" className='logo' />

      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#Explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("app")} className={menu === "app" ? "active" : ""}>App</a>
        <a href='#footer ' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
           <button>Sign in</button>
      </div>
      
    </div>
  )
}
