import React from 'react'
import Logo from "../assets/recipe-book-logo.png"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <header className="w-full fixed z-10 bg-black opacity-90">
    <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <Link to={"/"} className="flex items-center justify-center text-white text-lg cursor-pointer">
        <img src={Logo} alt="Logo" />
        Recipe<span>World</span>
        </Link>
    </nav>
   </header>
  )
}

export default NavBar
