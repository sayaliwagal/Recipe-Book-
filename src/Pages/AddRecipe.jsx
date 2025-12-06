import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useRecipes from "../utils/Hooks/useRecipes";
import { convertToBase64 } from "../utils/helper.js";

const AddRecipe = () => {
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();
  const mealOptions = ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];
  const [selectedMealTypes, setSelectedMealtypes] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    difficulty: "",
    mealType: [],
    servings: 1,
    prepTimeMinutes: 0,
    ingredients: "",
    instructions: "",
    tags: "",
    rating: "",
    image: "",
    reviewCount: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  //Handle multiSeletct
  const handleMultiSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, mealType: value });
  };
  //Handle text field changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  //Handle Image Upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
 try{
    const  base64 = await convertToBase64(file);
    setImagePreview(imgURL);
    setFormData({ ...formData, image: imgURL });
 }catch(err){
    console.error("Error converting file", err);
 }
  };
  //Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validate
    if (!formData.name) return toast.error("Recipe Name is Required! ");
    if (!formData.ingredients) return toast.error("Ingredients required! ");
    if (!formData.instructions) return toast.error("Instructions required! ");
    if (!formData.mealType.length)
      return toast.error("Select at least one meal type! ");
    if (!formData.rating) return toast.error("Rating is required!");

    const newRecipe = {
      ...formData,
      id: Date.now(),
      // Convert fields into arrays properly
      ingredients: formData.ingredients.split(",").map((i) => i.trim()),
      instructions: formData.instructions.split(",").map((i) => i.trim()),
      tags: formData.tags.split(",").map((i) => i.trim()),
      rating: Number(formData.rating),
      reviewCount: Number(formData.reviewCount),
    };

    addRecipe(newRecipe);

    // localStorage.setItem("useRecipes", JSON.stringify(storedRecipes));

    toast.success(`${formData.name} Recipe added Successfully!`);
    navigate("/"); //Redirect to Home.
  };
  return (
    <div className="text-white px-6 py-10 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-xl w-full md:w-[600px] shadow-lg space-y-4"
      >
        <h2 className="text-3xl font-bold text-center mb-5">Add New Recipe</h2>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Recipe Name *"
          className="w-full p-3 rounded bg-gray-800 outline-none"
          onChange={handleChange}
        />
        {/* Cuisine */}
        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine"
          className="w-full p-3 rounded bg-gray-800 outline-none"
          onChange={handleChange}
        />
        {/* Difficulty */}
        <select
          name="difficulty"
          className="w-full p-3 rounded bg-gray-800 outline-none"
          onChange={handleChange}
        >
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        {/* Mealype Multi Select */}
        <select
          name="mealType"
          multiple
          value={formData.mealType}
          className="w-full p-3 rounded bg-gray-800 outline-none"
          onChange={handleMultiSelect}
        >
          {mealOptions.map((meal, i) => {
            return (
              <option key={i} value={meal}>
                {meal}
              </option>
            );
          })}
        </select>
        <p className="text-xs text-gray-400">(Hold Ctrl to select multiple)</p>
        {/* Rating */}
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5) *"
          min="1"
          max="5"
          className="w-full p-3 rounded bg-gray-800 outline-none"
          onChange={handleChange}
        />
        {/* ReviweCount */}
        <input
          type="number"
          name="reviewCount"
          placeholder="Review Count*"
          className="w-full p-3 rounded bg-gray-800 outline-none"
          onChange={handleChange}
        />
        {/* Servings */}
        <input
          type="number"
          name="servings"
          placeholder="Servings"
          className="w-full p-3 rounded bg-gray-800 outline-none"
          onChange={handleChange}
        />
        {/* PrepTime */}
        <input
          type="number"
          name="prepTimeMinutes"
          placeholder="Prep Time (minutes)"
          className="w-full p-3 rounded bg-gray-800 outline-none"
          onChange={handleChange}
        />
        {/* Tags */}
        <input
          type="text"
          name="tags"
          placeholder="Tags (Comma separated)"
          className="w-full p-3 rounded bg-gray-800 outline-none"
          onChange={handleChange}
        />
        {/* Ingredients */}
        <textarea
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          className="w-full p-3 rounded bg-gray-800 outline-none h-20"
          onChange={handleChange}
        />
        {/* Instructions */}
        <textarea
          name="instructions"
          placeholder="Instructions *"
          className="w-full p-3 rounded bg-gray-800 outline-none h-20"
          onChange={handleChange}
        />
        {/* Upload Image */}
        <div>
          <label className="block mb-2 font-semibold">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            className="bg-gray-700"
            onChange={handleImageUpload}
          />
        </div>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="rounded-lg mt-3 w-full h-40 object-cover"
          />
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
