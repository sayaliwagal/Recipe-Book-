import React, { useEffect } from 'react'
import initialRecipes from '../../data/initialRecipes';

const LOCAL_KEY = "myRecipes";

const useRecipes = (apiRecipes = []) => {

    const [ localRecipes, setLocalRecipes ] = useState([]);
    const [ combinedRecipes, setCombinedRecipes ] = useState([]);

    // Load LocalStorage data once

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
        

        //Load initial data if localStorage is empty 
        if(stored.length === 0){
            localStorage.setItem(LOCAL_KEY, JSON.stringify(initialRecipes));
            setLocalRecipes(initialRecipes)
        }else{
            setLocalRecipes(stored);
        }
    }, []);

    // Merage API + Local storage whenever either changes
    useEffect(() => {
        setCombinedRecipes([...localRecipes, ...apiRecipes]);
    }, [localRecipes, apiRecipes]);

    //Add recipe to LocalStorage
    const addRecipe = (recipe) => {
        const updated = [...localRecipes, recipe];
        setLocalRecipes(updated);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
    };

  return { combinedRecipes, addRecipe };
}

export default useRecipes
