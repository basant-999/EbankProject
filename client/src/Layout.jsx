import React from 'react'
import Header from './component/Header'
import Topnav from './component/Topnav'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
   <Topnav/>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout