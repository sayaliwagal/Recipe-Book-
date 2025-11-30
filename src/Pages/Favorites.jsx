import React, { useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext";
import RecipeCard from "./RecipeCard.jsx";
import { Link } from "react-router-dom";
// import { FaHeart } from 'react-icons/fa';
const Favorites = () => {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);

  if (favorites.length === 0) {
    return (
      <div className="text-center text-white py-20">
        <p className="text-2xl mb-4">No Favorites added yet ❤️</p>
        <Link to="/" className="text-blue-400 underline">
          Browse Recipes{" "}
        </Link>
      </div>
    );
  }
  return (
    <div className="px-4 py-10 flex flex-wrap gap-10 justify-center">
      {favorites.map((recipe, id) => {
        return <RecipeCard key={id} recipes={recipe} />;
      })}
    </div>
  );
};

export default Favorites;
