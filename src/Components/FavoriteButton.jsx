import React, { useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext.jsx";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavoriteButton = ({ recipe }) => {
  const { toggleFavorite, isFavorite } = useContext(FavoriteContext);
  const favorite = isFavorite(recipe.id);
  return (
    <button
     onClick={() => toggleFavorite(recipe)}
     className="absolute top-3 right-3 text-xl p-4 rounded-full bg-black/40 backdrop-blur-sm hover:scal-110 transition"
    >
      {favorite ? (
        <FaHeart className="text-red-500" />
      ) : (
        <FaRegHeart className="text-white" />
      )}
    </button>
  );
};

export default FavoriteButton;
