import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const ResponsiveNav = ({ open, }) => {
  return (
    <div
      className={`${open ? "flex" : "hidden"}
    bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px] justify-center items-center`}
    >
      <NavLink to={"/"}>Home</NavLink>

      <NavLink to={"/recipes/:id"}>Explore Recipes</NavLink>

      <NavLink to={"/favorites"}> Favorite</NavLink>
       <Button
          title="Sign in"
          containerStyle=' w-50 bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'
        />
    </div>
  );
};

export default ResponsiveNav;
