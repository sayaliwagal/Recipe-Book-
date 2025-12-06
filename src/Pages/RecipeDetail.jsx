import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/Hooks/useFetch";
import { getDifficultyColor } from "../utils/helper";
import StarRating from "../Components/StarRating";
import { Link } from "react-router-dom";
import { FcAlarmClock } from "react-icons/fc";
import { AiFillFire } from "react-icons/ai";
import { LuClock12 } from "react-icons/lu";
import { LiaUserSolid } from "react-icons/lia";
import FavoriteButton from "../Components/FavoriteButton";
import useRecipes from "../utils/Hooks/useRecipes.jsx";

const RecipeDetail = () => {
  const { id } = useParams();
  const { allRecipes } = useRecipes();
  const recipeId = Number(id);
  const localRecipes = allRecipes.find((r) => r.id === recipeId);
  const shouldFetch = recipeId <= 200; //ApI has small range of IDs
  const { data: apiRecipes, loading, error } = shouldFetch?useFetch(`https://dummyjson.com/recipes/${recipeId}`)
    :{ data: null, loading: false, error: null };
  // console.log(data);

  // Final recipe selection
const recipe = localRecipes ?? apiRecipes;

  if (loading) {
    return <p className="text-center text-gray-300 mt-10">Loadding.......</p>;
  }
  if (!recipe) {
    return <p className="text-center text-gray-300 mt-10">Recipe not found.......</p>;
  }
  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }
    const {
    name,
    image,
    cuisine,
    difficulty,
    prepTimeMinutes,
    cookTimeMinutes,
    ingredients,
    instructions,
    rating,
    reviewCount,
    servings,
    mealType,
    caloriesPerServing,
    tags,
  } = recipe;
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white">
      <Link to={"/"} className="text-green-400 underline hover:text-green-500">
        Back to Home
      </Link>

      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full rounded-xl my-6 object-cover max-h-[500px]"
        />
        <FavoriteButton recipe={recipe} />
      </div>
      <h1 className="text-3xl font-bold mt-4">{name}</h1>

      {/* Rating + Reviews  */}
      <div className="flex ite gap-3 mt-2">
        <StarRating rating={rating} />
        <p className="text-sm text-gray-300">({reviewCount} Reviews)</p>
      </div>
      <div className="flex flex-wrap gap-3 mt-3">
        {cuisine && (

          <span className="px-2 py-1 text-[12px] font-semibold capitalize bg-orange-600 shadow-xl rounded-full mr-3 mt-2 text-white">
          {cuisine}
        </span>
        )}
        {mealType?.map((type, i) => (
          <span key={i} className="px-2 py-1 rounded-full bg-purple-700 text-[12px] font-semibold capitalize shadow-xl mr-3 mt-2 text-white">
            {type}
          </span>
        ))}
        {difficulty && (

          <span
          className={`px-2 py-1 text-[12px] font-semibold capitalize shadow-xl rounded-full mr-3 mt-2 ${getDifficultyColor(
            difficulty
            )}`}
            >
          {difficulty}
        </span>
        )}
      </div>
      {/* Time + Serving + Calories  */}
      <div className="flex flex-row gap-4 mt-6">
        <div className="flex p-2 rounded-lg">
          <LuClock12 className="mx-auto text-green-400 text-xl mr-3" />
          <p className="text-sm">Prep: {prepTimeMinutes} mins</p>
        </div>
        <div className="flex p-2 rounded-lg">
          <FcAlarmClock className="mx-auto text-green-400 text-xl mr-3" />
          <p className="text-sm">Cook: {cookTimeMinutes} mins</p>
        </div>
        <div className="flex p-2 rounded-lg">
          <LiaUserSolid className="mx-auto text-blue-400 text-xl mr-3" />
          <p className="text-sm">Servings: {servings}</p>
        </div>
        <div className="flex p-2 rounded-lg">
          <AiFillFire className="mx-auto text-orange-400 text-xl mr-3" />
          <p className="text-sm">{caloriesPerServing} Cal/serv</p>
        </div>
      </div>
      {/* Ingredients  */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
          {ingredients?.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        {/* Instructions  */}
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mt-8">Instructions</h2>
        <ol className="list-decimal ml-6 mt-3 text-gray-300 space-y-2 leading-relaxed">
          {instructions?.map((st, index) => {
            return <li key={index}>{st}</li>;
          })}
        </ol>
      </section>
      {/* Extra Tags  */}
      {tags?.length > 0 && (
        <section className="mt-8">
          <h3 className="text-xl font-semibold">Tags</h3>
          <div className="flex flex-wrap gap-2 mt-2 ">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-gray-600 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default RecipeDetail;
