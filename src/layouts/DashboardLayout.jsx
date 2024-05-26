import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSideBar from "../shared component/admin/adminsidebar/AdminSideBar"
import UserSideBar from "../shared component/user/usersidebar/UserSideBar"

const DashboardLayout = () => {
     const admin = false;
  return (
    <div style={{display: "flex", justifyContent: "center", minHeight: "100vh"}}>
      {admin? <AdminSideBar></AdminSideBar> : <UserSideBar></UserSideBar>}
      <Outlet></Outlet>
    </div>
  )
}

export default DashboardLayout
