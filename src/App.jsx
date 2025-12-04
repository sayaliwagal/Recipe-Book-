import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Layout from "./Pages/Layout.jsx";
import RecipeDetail from "./Pages/RecipeDetail.jsx";
import Favorites from "./Pages/Favorites.jsx";
import Explore from "./Pages/Explore.jsx";
import AddRecipe from "./Pages/AddRecipe.jsx";

const App = () => {
  return (
    <div className="bg-slate-950">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/exploreRecipes" element={<Explore />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
