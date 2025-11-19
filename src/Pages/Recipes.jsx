import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import SearchBar from "../Components/SearchBar";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 md:px-10">
        <form action="" className="w-full lg:w-2/4">
         <SearchBar 
         placeholder = "eg, Cake, Vegan, Panner"
         handleInputChange={handleInputChange}
         rightIcon={
          <BiSearchAlt2  className="text-gray-600 text-2xl"/>
         }
          />
        </form>
      </div>
    </div>
  );
};

export default Recipes;
