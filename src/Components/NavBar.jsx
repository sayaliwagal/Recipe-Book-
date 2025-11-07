import React from 'react'
import Logo from "../assets/recipe-book-logo.png"
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  console.log(Logo)
  return (
   <header className="w-full fixed z-10 bg-black opacity-90">
    <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <Link to={"/"} className="flex items-center justify-center text-white text-lg cursor-pointer">
        <img src={Logo} alt="Logo" />
        Recipe<span>World</span>
        </Link>
        <ul className="hidden md:flex text-white gap-6">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/recipes/:id"}>Explore Recipes</NavLink>
          </li>
           <li>
            <NavLink to={"/favorites"}> Favorite</NavLink>
          </li>
        </ul>
    </nav>
   </header>
  )
}

export default NavBar
