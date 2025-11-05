import React from 'react';
import Header from '../Components/Header';

const Home = () => {
  return (
  <main className="w-full flex flex-col">
    <Header
    title={
        <p>Taste the World with 
            <br/> Wonderfull Dishes!
        </p>
    } 
     type="home"
    />
  </main>
  )
}

export default Home
