import React, { useState } from 'react'
import { BiSolidSearchAlt2 } from 'react-icons/bi'

const Recipes = () => {
    const [ recipes, setRecipes ] = useState([]);
    const [ query, setQuery ] = useState("Vegan");
    const [ limit, setLimit ] = useState(30);
    const [ loading, setLoading ] = useState(false);

  return (
    <div>
      Recipes
    </div>
  )
}

export default Recipes
