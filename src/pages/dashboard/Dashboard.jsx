import React from 'react'
import Adminhome from '../../shared component/admin/adminhome/Adminhome';
import UserHome from '../../shared component/user/userhome/UserHome';

const Dashboard = () => {
    const admin = false;
  return (
    <div>
       {
        admin? <Adminhome></Adminhome> : <UserHome></UserHome>
       }
    </div>
  )
}

export default Dashboard
