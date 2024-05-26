import React from 'react'

import { FaMoneyCheckAlt, FaProductHunt, FaTruck, FaUsers } from "react-icons/fa";

import "./adminhome.css"

const Adminhome = () => {
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
      
    </div>
  )
}

export default Adminhome
