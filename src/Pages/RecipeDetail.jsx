import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/Hooks/useFetch";
import { Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/recipes/${id}`
  );
  const {
    name,
    image,
    cuisine,
    difficulty,
    mealType,
    ingredients,
    instructions,
    step,
  } = data;

  if (loading) {
    return <p className="text-center text-gray-300 mt-10">Loadding.......</p>;
  }
  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white">
      <Link to={"/"} className="text-green-400 underline hover:text-green-500">
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold mt-4">{name}</h1>
      <img
        src={image}
        alt={name}
        className="w-full rounded-xl my-6 object-cover max-h-[500px]"
      />
      <div className="flex gap-3 flex-wrap mb-6">
        <span className="px-3 py-1 bg-green-900 text-white text-sm rounded-full">{cuisine}</span>
        <span className="px-3 py-1 bg-green-900 text-white text-sm rounded-full">{difficulty}</span>
        <span className="px-3 py-1 bg-green-900 text-white text-sm rounded-full">{mealType?.join(", ")}</span>
      </div>
    </div>
  );
};

export default RecipeDetail;
