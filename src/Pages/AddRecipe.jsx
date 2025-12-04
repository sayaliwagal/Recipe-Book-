import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const AddRecipe = () => {

    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        name: "", cuisine: "", difficulty: "", servings: 1, prepTimeMinutes: 0,
        ingredients: "", instructions: "", image: "" 
    });

    const [imagePreview, setImagePreview ] = useState(null);

    //Handle text field changes
    const handleChange = (e) => {
        const { name , value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    //Handle Image Upload 
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if(!file)
            return;

        const imgURL = URL.createObjectURL(file);
        setImagePreview(imgURL);
        setFormData({ ...formData, image: imgURL });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.name ||  !formData.ingredients || !formData.instructions) {
            alert("Please fill all required fields!");
            return;
        }

        let storedRecipes = JSON.parse(localStorage.getItem("useRecipes") || []);

        const newRecipe = {
            ...formData,
            id: Data.now(),
            rating: 0,
            reviewCount: 0,
            mealType: ["Custom"],
        };

        storedRecipes.push(newRecipe);
        localStorage.setItem("useRecipes", JSON.stringify(storedRecipes));

        toast.success(`${name} Recipe added Successfully!`);
        navigate("/")  //Redirect to Home.
    }
  return (
    <div className='text-white px-6 py-10 flex justify-center'>
        <form 
           onSubmit={handleSubmit} 
           className="bg-gray-900 p-6 rounded-xl w-full md:w-[600px] shadow-lg space-y-4">
            <h2 className='text-3xl font-bold text-center mb-5'>
                Add New Recipe
            </h2>
            <input 
               type="text"
               name="name"
               placeholder="Recipe Name *"
               className="w-full p-3 rounded bg-gray-800 outline-none"
               onChange={handleChange}
               />
               <input
               type="text"
               name= "cuisine"
               placeholder="Cuisine"
               className="w-full p-3 rounded bg-gray-800 outline-none"
               onChange={handleChange}
               />

               <select name="difficulty"
               className="w-full p-3 rounded bg-gray-800 outline-none"
               onChange={handleChange}>
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
               </select>
               <input 
                   type="number" 
                   name="servings" 
                   placeholder="Servings"
                   className= "w-full p-3 rounded bg-gray-800 outline-none"
                   onChange={handleChange} 
                />
                <input 
                type="number"
                name="prepTimeMinutes"
                placeholder="Prep Time (minutes)"
                className="w-full p-3 rounded bg-gray-800 outline-none"
                />
                <textarea 
                  name="ingredients"
                  placeholder="Ingredients (comma separated)"
                  className="w-full p-3 rounded bg-gray-800 outline-none h-20"
                  onChange={handleChange}
                  />
                  <textarea 
                  name="instructions"
                  placeholder="Instructions *"
                  className="w-full p-3 rounded bg-gray-800 outline-none h-20"
                  onChange={handleChange}
                  />
                  <div>
                    <label className='block mb-2 font-semibold'>Upload Image</label>
                    <input 
                      type="file"
                      accept="image/*"
                      className="bg-gray-700"
                      onChange={handleChange}
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
  )
}

export default AddRecipe
