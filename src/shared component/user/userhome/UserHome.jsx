import React from 'react'

import { FaMoneyCheckAlt, FaProductHunt, FaShoppingCart, FaStar, FaTruck, FaUsers } from "react-icons/fa";
import "./userhome.css"
import { FaBook } from 'react-icons/fa6';

const UserHome = () => {
  return (
    <div className='adminhome'>
      <h1>Hi Name, welcome back </h1>
      
      <div className='adminhomecontent'>
        <div className='content'>
            <div className="icon"><FaMoneyCheckAlt /></div>
            <div className="admin-info">
                <p>1000</p>
                <p>revenue</p>
            </div>
        </div>
        <div className='content'>
            <div className="icon"><FaUsers /></div>
            <div className="admin-info">
                <p>1000</p>
                <p>customers</p>
            </div>
        </div>
        <div className='content'>
            <div className="icon"><FaProductHunt /></div>
            <div className="admin-info">
                <p>1000</p>
                <p>products</p>
            </div>
        </div>
        <div className='content'>
            <div className="icon"><FaTruck /></div>
            <div className="admin-info">
                <p>1000</p>
                <p>orders</p>
            </div>
        </div>
      </div>

      <div className="useractivity">
        <div className="userImage">
              <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716623177/Resturant%20Project/profile_dyu4nl.png" alt="" />
        </div>
        <div className="user-activity-content">
            <h2>Your activities</h2>
            <p style={{color: "blue"}}> <FaShoppingCart /> <span>orders: 6 </span></p>
            <p style={{color: "#9c874f"}}> <FaStar /> <span>reviews: 3 </span></p>
            <p style={{color: "#459299"}}><FaBook /> <span>bookings: 6 </span></p>
            <p style={{color: '#994577'}}> 
            <FaMoneyCheckAlt /> <span>payment: 3 </span></p>
        </div>
      </div>
      
    </div>
  )
}

export default UserHome
