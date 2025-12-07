import React from "react";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const ResponsiveNav = ({ open }) => {
  return (
    <div
      className={`${open ? "flex" : "hidden"}
    bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px] justify-center items-center`}
    >
      <NavLink to={"/"}>Home</NavLink>

      <NavLink to={"/recipes/:id"}>Explore Recipes</NavLink>

      <NavLink to={"/favorites"}> Favorite</NavLink>
       <NavLink
                to={"/addRecipe"}
                className="w-50 bg-green-600 rounded-lg hover:bg-green-700 flex p-2 text-gray-100 font-semibold items-center justify-center"
              >
                <FaPlus size={20} /> <span className="ml-3">Add Recipe</span>
              </NavLink>
      <Button
        title="Sign in"
        containerStyle=" w-50 bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]"
      />
    </div>
  );
};

export default ResponsiveNav;
