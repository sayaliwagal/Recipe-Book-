import React from 'react';
import Header from '../Components/Header.jsx';
import Recipes from './Recipes.jsx';

const Home = () => {
  return (
  <main className = "w-full flex flex-col">
    <Header
    title = {
        <p>Taste the World with 
            <br/> Wonderfull Dishes!
        </p>
    } 
     type = "home"
    />
    <section id = "recipes" className = "md:w-[1440px] mx-auto px-4 md:px-20">
      <Recipes />
    </section>
  </main>
  )
}

export default Home
