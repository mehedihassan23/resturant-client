import React from 'react'

import "./adminsidebar.css"
import { Link } from 'react-router-dom'
import {FaBars, FaBook, FaHome, FaUtensils} from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6'

const AdminSideBar = () => {
  return (
    <div className='dashboardSidebar'>
       <ul>
        <li>
            <h1>bistro boss</h1>
            <h2>resturant</h2>
        </li>
        <li> <Link to="/dashboard"> <FaHome /> <span>Admin Home</span> </Link> </li>
        <li><Link to="/dashboard/additem"> <FaUtensils /> <span>Add items</span> </Link></li>
        <li><Link to="/dashboard/manageitem"> <FaBars /> <span>manage items</span></Link></li>
        <li><Link to=""> <FaBook /> <span>manage bookings</span> </Link> </li>
        <li><Link to="/dashboard/allusers"><FaUsers /> <span>all users</span></Link> </li>
        <li><hr /></li>
        <li><Link to=""> <FaHome /> <span>Home</span> </Link> </li>
        <li><button>sign out</button></li>    
       </ul>
    </div>
  )
}

export default AdminSideBar
