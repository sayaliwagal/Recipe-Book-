import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
     <NavBar />
     <main className="pt-16">
     <Outlet />
     </main>
     <Footer /> 
    </>
  )
}

export default Layout
