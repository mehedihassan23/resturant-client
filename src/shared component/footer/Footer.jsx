import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.css"
const Footer = () => {
  return (
    <>
    <footer>
      <div className='contact'>
        <ul>
          <li>Contact us</li>
          <li>123/ABS Street, United States </li>
          <li>+0123456789</li>
          <li>Mon-Fri: 8 am - 4 Pm</li>
        </ul>
      </div>
       
       <div className="social-media">
         <h1 className="social-media-heading">Follow Us</h1>     
          <ul>
            <li><FaFacebookF className='social-media-icon' /></li>
            <li><FaInstagram className='social-media-icon' /> </li>
            <li><FaTwitter className='social-media-icon' /></li>
          </ul>           
       </div>
    </footer>
    <p style={{background: "black", padding: "1rem 0", textAlign: "center", color: "white", fontSize: "2rem"}}>Copyright By &copy; Resturant । All rights reserved</p>
    </>
    )
}


export default Footer