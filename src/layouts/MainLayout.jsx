import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../shared component/header/Header'
import Footer from '../shared component/footer/Footer'

const MainLayout = () => {
  return (
    <div>
       <Header> </Header>
      <Outlet></Outlet>
       <Footer />
    </div>
  )
}

export default MainLayout
