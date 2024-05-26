import React from 'react'

import { Link } from 'react-router-dom'
import {FaBars,  FaHome, FaMoneyCheck, FaShoppingCart} from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6'

const UserSideBar = () => {
  return (
    <div className='dashboardSidebar'>
      <ul>
        <li>
            <h1>bistro boss</h1>
            <h2>resturant</h2>
        </li>
        <li> <Link to=""> <FaHome /> <span>User Home</span> </Link> </li>
        <li><Link to=""> <FaBars /> <span>Reservation</span></Link></li>
        <li><Link to="/dashboard/paymenthistory"> <FaMoneyCheck />  <span>payment history</span> </Link> </li>
        <li><Link to="/dashboard/cart"> <FaShoppingCart /> <span>My Cart</span> </Link> </li>
       
        <li><hr /></li>
        <li><Link to="/"> <FaHome /> <span>Home</span> </Link> </li>
        <li><button>sign out</button></li>    
       </ul>

        
    </div>
  )
}

export default UserSideBar

