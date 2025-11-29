import React from 'react';
import { Link, Links } from 'react-router-dom';
import StarRating from '../Components/StarRating';

const RecipeCard = (props) => {
    const {recipes} = props;
    console.log(props);
    console.log(recipes);
    const { id, name, difficulty, cuisine,image, rating, mealType } = recipes;

  return (
    <Link to={`/recipes/${id}`} className='w-full md:w-[200px]'>

    <div className='bg_gradient shadow w-full md:w-[250px] md:h-[300px] rounded-lg'>
        <img src={image} alt={name} className='rounded-lg h-[400px] md:h-[150px] w-full object-cover'/>
        <div className="p-3">
          <p className="text-white font-semibold">
            {name}
          </p>
          <div className="mt-2 flex flex-wrap">
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
              {cuisine}
            </span>
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
              {mealType}
            </span>
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
              {difficulty}
            </span>
          </div>
          <div className="flex gap-2 font-semibold m-2">
              <span>
                <StarRating rating={rating} />
              </span>
          </div>
        </div>
      
    </div>
    </Link>
  )
}

export default RecipeCard
