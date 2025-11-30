import { createContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [ favorites, setFavorite ] = useState([]);

    //Load fron localStorage

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorite(stored);
    }, []);

    //Save to localStorage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (recipe) => {

        const exists = favorites.find((item) => {
            return item.id === recipe.id;
        });
        if(exists){
            setFavorite(favorites.filter((item) => {
                return item.id !== recipe.id
            }));
        }else{
            setFavorite([...favorites, recipe]);
        }
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