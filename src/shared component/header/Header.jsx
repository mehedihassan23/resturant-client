import React, { useState } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { FaAlignJustify } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav>
      <ul className='sidebar' style={{ display: toggle ? "flex" : "none" }} >
        <li><NavLink to="" className="link">Resturant</NavLink></li>
        <li><NavLink to="/" className="link">Home</NavLink></li>
        <li><NavLink to="/menu" className="link">Our Menu</NavLink></li>
        <li className='mobile-hide'><NavLink to="/shop" className="link">Our Shop</NavLink></li>
        <li><NavLink to="/signin" className="link">Sign In</NavLink></li>
        <li onClick={() => setToggle(!toggle)} >
          <NavLink className="link"> <FaWindowClose /> </NavLink>
        </li>
      </ul>

      <ul style={{ display: toggle ? "none" : "flex" }} id='navbar'>
        <li className='logo'><NavLink to="/" className="link">Resturant</NavLink></li>
        <li className='mobile-hide'><NavLink to="/" className="link">Home</NavLink></li>
        <li className='mobile-hide'><NavLink to="/menu" className="link">Our Menu</NavLink></li>
        <li className='mobile-hide'><NavLink to="/shop" className="link">Our Shop</NavLink></li>
        <li className='mobile-hide'><NavLink to="/signin" className="link">Sign In</NavLink></li>
        <li onClick={() => setToggle(!toggle)} className='menu-button'>
          <NavLink className="link"> <FaAlignJustify /> </NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default Header
