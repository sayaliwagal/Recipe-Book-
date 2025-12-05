import { createContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [ favorites, setFavorite ] = useState(()=> {
    try{
            const stored = localStorage.getItem("favorites");
            return stored ? JSON.parse(stored) : [];
        }catch {
            return [];
        }
        });

    //Save to localStorage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (recipe) => {
 setFavorite((prev) => {
      const exists = prev.some((item) => item.id === recipe.id);
      return exists
        ? prev.filter((item) => item.id !== recipe.id)
        : [...prev, recipe];
    });
    };

    const isFavorite = (id) => {
        return favorites.some((item) => item.id === id );
    };
    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoriteContext.Provider>
    )
};

export default FavoriteContext;