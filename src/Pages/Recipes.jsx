import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import SearchBar from "../Components/SearchBar";
import { BeatLoader } from "react-spinners";
import useFetch from "../utils/Hooks/useFetch";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/recipes?limit=0`
  );

  useEffect(() => {
    if (!data || !data.recipes) return;
    setRecipes(data.recipes);
    setFilterRecipes(data.recipes);
  }, [data]);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if(!value){
      setFilterRecipes(recipes);
      return;
    }
    const filtered = recipes.filter((meal) =>
    meal.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilterRecipes(filtered);
  };
  if (loading) return <BeatLoader color="#325cc7" />;
  if (error)
    return (
      <div className="text-center mt-2 w-3 p-3 bg-red-800 opacity-5">
        <p className="font-semibold text-red-600 text-2xl">{error}</p>
      </div>
    );
  //Error Handling ui
  if (error) {
    return (
      <div className="text-center mt-2 w-3 p-3 bg-red-800 opacity-5">
        <p className="font-semibold text-red-600 text-2xl">{error}</p>
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 md:px-10">
        <form action="" className="w-full lg:w-2/4">
          <SearchBar
            placeholder="eg, Cake, Vegan, Panner"
            handleInputChange={handleInputChange}
            rightIcon={<BiSearchAlt2 className="text-gray-600 text-2xl" />}
          />
        </form>
      </div>
      {filterRecipes?.length > 0 ? (
        <>
          <div className="w-full flex flex-wrap items-center justify-center md:gap-18 px-0 lg:px-8 py-8">
            {filterRecipes?.map((item, index) => {
              return (<RecipeCard recipes={item} key={index} />
              )
            })}
          </div>
        </>
      ) : (
        <div className="text-white w-full item-center justify-center py-10">
          <p>No Recipe Found</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
