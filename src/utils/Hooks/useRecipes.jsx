import React, { useEffect, useMemo, useState } from "react";

const LOCAL_KEY = "useRecipes";

const useRecipes = (apiRecipes = []) => {
  const [localRecipes, setLocalRecipes] = useState(
    JSON.parse(localStorage.getItem(LOCAL_KEY)) || []
  );

  //Add recipe to LocalStorage
  const addRecipe = (recipe) => {
    const newRecipe = {
        ...recipe,
        id: recipe.id || Date.now(), // Assign unique id for local recipes
    }
    const updated = [...localRecipes, recipe];
    setLocalRecipes(updated);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
  };

  const allRecipes = useMemo(() => {
    return [...apiRecipes, ...localRecipes];
  }, [addRecipe, localRecipes]);

  return { allRecipes, addRecipe };
};

export default useRecipes;
