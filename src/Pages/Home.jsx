import React from 'react';
import Header from '../Components/Header.jsx';
import Recipes from './Recipes.jsx';

const Home = () => {
  return (
  <main className = "w-full flex flex-col min-h-screen overflow-x-hidden">
    <Header
    title = {
        <p>Taste the World with 
            <br/> Wonderfull Dishes!
        </p>
    } 
     type = "home"
    />
    <section id = "recipes" className = "max-w-[1440px] w-full mx-auto px-4 md:px-20">
      <Recipes />
    </section>
  </main>
  )
}

export default Home
