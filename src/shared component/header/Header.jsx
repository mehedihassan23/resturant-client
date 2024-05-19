import React, { useState } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { FaAlignJustify } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

const Header = () => {
     const [toggle, setToggle] = useState(false)
  return (
    <nav>
      <ul className='sidebar' style={{display: toggle? "flex" : "none"}} >
          <li><NavLink to="" className="link">Resturant</NavLink></li>
          <li><NavLink to="" className="link">Home</NavLink></li>
          <li><NavLink to="" className="link">About</NavLink></li>
          <li><NavLink to="" className="link">Login</NavLink></li>
          <li onClick={() => setToggle(!toggle)} >
            <NavLink className="link"> <FaWindowClose /> </NavLink>
          </li>
           
         </ul>

         <ul style={{display: toggle? "none" : "flex"}} >
          <li className='logo'><NavLink to="/" className="link">Resturant</NavLink></li>
          <li className='mobile-hide'><NavLink to="" className="link">Home</NavLink></li>
          <li className='mobile-hide'><NavLink to="" className="link">About</NavLink></li>
          <li className='mobile-hide'><NavLink to="" className="link">Login</NavLink></li>
          <li onClick={() => setToggle(!toggle)} className='menu-button'>
            <NavLink className="link"> <FaAlignJustify /> </NavLink>
          </li>
         </ul>
    </nav>
  )
}

export default Header
