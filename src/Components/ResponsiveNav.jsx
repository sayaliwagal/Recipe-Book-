import React from "react";
import { NavLink } from "react-router-dom";

const ResponsiveNav = ({ open, }) => {
  return (
    <div
      className={`${open ? "flex" : "hidden"}
    bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}
    >
      <NavLink to={"/"}>Home</NavLink>

      <NavLink to={"/recipes/:id"}>Explore Recipes</NavLink>

      <NavLink to={"/favorites"}> Favorite</NavLink>
    </div>
  );
};

export default ResponsiveNav;
