import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Layout from "./Pages/Layout.jsx";
import RecipeDetail from "./Pages/RecipeDetail.jsx";

const App = () => {
  return (
    <div className="bg-gray-950">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
