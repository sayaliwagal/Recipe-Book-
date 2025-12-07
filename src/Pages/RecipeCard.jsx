import React from "react";
import { Link, useNavigate } from "react-router-dom";
import StarRating from "../Components/StarRating";
import { getDifficultyColor } from "../utils/helper";
import { LuClock12 } from "react-icons/lu";
import { LiaUserSolid } from "react-icons/lia";
import Button from "../Components/Button.jsx";

import FavoriteButton from "../Components/FavoriteButton.jsx";

const RecipeCard = (props) => {
  const placeholderImg = "/placeholder.pg"
  const { recipe } = props;
  if (!recipe) return null;
  const {
    id,
    name,
    difficulty,
    cuisine,
    image,
    rating,
    mealType,
    prepTimeMinutes,
    servings,
  } = recipe;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/recipes/${id}`);
  };
  return (
    <div className="bg_gradient shadow w-full max-w-[300px] rounded-lg flex flex-col">
      <div className="relative">
        <img
          src={image && (image.startsWith("data:") || image.startsWith("http"))
            ? image
            : placeholderImg
          }
          alt={name || "Recipe Image"}
          className="rounded-t-lg h-48 md:h-52 w-full object-cover"
   
        />
        <FavoriteButton recipe={recipe} />
      </div>
      <div className="p-3 mt-4 flex flex-col gap-2 overflow-hidden ">
        <p className="text-white font-semibold line-clamp-1">{name}</p>
        <div className="flex gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="px-2 py-1 text-[12px] font-semibold capitalize bg-orange-600 shadow-xl rounded-full mr-3 mt-2 text-white">
            {cuisine}
          </span>
          <span className="px-2 py-1 text-[12px] font-semibold capitalize bg-purple-900 shadow-xl rounded-full mr-3 mt-2 text-white">
            {mealType?.slice(0, 1)} {/* show only fist tag */}
          </span>
          <span
            className={`px-2 py-1 text-[12px] font-semibold capitalize shadow-xl rounded-full mr-3 mt-2 ${getDifficultyColor(
              difficulty
            )}`}
          >
            {difficulty}
          </span>
        </div>
        <div className="flex flex-col  mb-1  bg-black/5 p-3 rounded-lg">
          <p className="flex items-center gap-2 text-gray-200 text-sm font-medium">
            <LuClock12 className="text-green-400 text-lg" />
            {prepTimeMinutes} mins
          </p>
          <p className="flex items-center gap-2 text-gray-200 text-sm font-medium">
            <LiaUserSolid className="text-blue-400 text-lg" />
            {servings} serve
          </p>
        </div>
        <div className="flex gap-2 font-semibold m-2">
          <span>
            <StarRating rating={rating} />
          </span>
        </div>
        <Button
          title="View Details"
          handleClick={handleNavigate}
          containerStyle="mt-3 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        />
      </div>
    </div>
  );
};

export default RecipeCard;
