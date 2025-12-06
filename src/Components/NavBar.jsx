import React, { useState } from "react";
import Logo from "../assets/recipe-book-logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button.jsx";
import ResponsiveNav from "./ResponsiveNav.jsx";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full fixed z-10 bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <Link
          to={"/"}
          className="flex items-center justify-center text-white text-lg cursor-pointer"
        >
          <img
            src={Logo}
            alt="Logo"
            className=" md:block w-8 h-8 lg:w-14 lg:h-14"
          />
          Recipe<span>World</span>
        </Link>
        <ul className="hidden md:flex text-white gap-6 cursor-pointer">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/exploreRecipes"}>Explore Recipes</NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"}>Favorite</NavLink>
          </li>
        </ul>
        <NavLink
          to={"/addRecipe"}
          className="bg-green-600 rounded-lg hover:bg-green-700"
        >
          <FaPlus size={20} /> Add Recipe
        </NavLink>
        <Button
          title="Sign in"
          containerStyle="hidden md:block bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-slate-700 rounded-full min-w-[130px] cursor-pointer"
        />
        <button
          className="block md:hidden text-white text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
      {/* responsive nav */}
      <ResponsiveNav open={open} />
    </header>
  );
};

export default NavBar;
