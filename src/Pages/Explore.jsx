import React, { useEffect, useState } from 'react'
import useFetch from '../utils/Hooks/useFetch'
import { BiSearchAlt2 } from "react-icons/bi";
import SearchBar from '../Components/SearchBar';
import { BeatLoader } from "react-spinners";
import RecipeCard from './RecipeCard';

const Explore = () => {
    const { data, loading, error } = useFetch(`https://dummyjson.com/recipes?limit=0`);
    const recipes = data?.recipes || [];

    const [ searchQuery, setSearchQuery ] = useState("");
    const [ cuisine, setCuisine ] = useState("");
    const [ difficulty, setDifficulty ] = useState("");

    useEffect(() => {

    }, [searchQuery, cuisine, difficulty]);

    const filterRecipes = recipes.filter((recipe) => {
        return (
            recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (cuisine ? recipe.cuisine === cuisine : true) && 
            (difficulty ? recipe.difficulty === difficulty : true)
        );
    });

    const cuisineList = [...new Set(recipes.map((r) => r.cuisine))];
    const dificultyList = [...new Set(recipes.map((r) => r.difficulty))];
  return (
    <div className='min-h-screen px-5 md:px-10 py-12 text-white bg_gradi'>
        <h1 className="text-4xl font-bold mb-10 text-center">Explore Recipes ....</h1>
      {/*  Filters Setion */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mx-auto mb-16">
        <SearchBar
         placeholder="Search Recipes..."
         handleInputChange={(e) => setSearchQuery(e.target.value)}
         rightIcon={<BiSearchAlt2 className="text-gray-600 text-2xl" />}
         />
         <select 
         className="bg-gray-800 p-3 rounded-lg outline-none border border-gray-700 focus:border-orange-500 transition-all"
         onChange={(e) => setCuisine(e.target.value)}>
            <option value="">All Cuisines</option>
            {cuisineList.map((c, i) => {
                return (
                    <option value={c} key={i}>{c}</option>
                    )
                })}
         </select>

         <select 
         className="bg-gray-800 p-3 rounded-lg outline-none border border-gray-700 focus:border-orange-500 transition-all"
         onChange={(e) => setDifficulty(e.target.value)}>
            <option value="">All Difficulty</option>
            {dificultyList.map((d, i) => {
                return (
                    <option value={d} key={i}>{d}</option>
                    )
                })}
         </select>
      </div>

      {/* Recipe Listing  */}

      <div className="mt-12 flex flex-wrap gap-8 justify-center">
        {loading ? (
           <BeatLoader color="#325cc7" />
        ): filterRecipes.length > 0 ? (
            filterRecipes.map((recipe, index) => {
                return (
                    <RecipeCard key={index} recipe={recipe} />
                )
            })
        ) : (
            <p className='text-center text-gray-400 text-xl font-medium'>No Recipes match filters...</p>
        )}
      </div>
    </div>
  )
}

export default Explore
