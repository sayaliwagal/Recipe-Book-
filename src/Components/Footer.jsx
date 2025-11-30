import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'

const Footer = () => {
  return (
    <footer className='text-white py-20 bg-black opacity-90'>
      <div className='container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800 '>
        <div className="flex">
          <p className="font-bold text-center">
            Recipe<span className="text-green-500 text-xl">
              World
            </span>
          </p>
        </div>
        <div className='text-2xl mb-2'>
          <p>QUIK LINKS</p>
          <div className="flex flex-col text-start mb-4 md:mb-0 text-2xl">
            <Link to ={"/"} className='block md:inline-block py-2 hover:text-gray-500'>Home</Link>
            <Link to ={"/recipes"} className='block md:inline-block py-2 hover:text-gray-500'>Explore Recipes</Link>
            <Link to ={"/favorites"} className='block md:inline-block py-2 hover:text-gray-500'>Favorite</Link>
          </div>
        </div>
        <div className='text-2xl mb-2'>
          <p>LEGAL</p>
          <div className="flex flex-col text-start mb-4 md:mb-0 text-2xl">
            <Link to ={"/#"} className='block md:inline-block py-2 hover:text-gray-500'>Terms and Conditions</Link>
            <Link to ={"/#"} className='block md:inline-block py-2 hover:text-gray-500'>License Agreement</Link>
            <Link to ={"/#"} className='block md:inline-block py-2 hover:text-gray-500'>Privacy Policy</Link>
            <Link to ={"/#"} className='block md:inline-block py-2 hover:text-gray-500'>Copyright Information</Link>
            <Link to ={"/#"} className='block md:inline-block py-2 hover:text-gray-500'>Cookies Policy</Link>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <p>SOCIAL MEDIA</p>
          <div className="flex m-4 gap-3">
            <Link to ={"/#"} className='bg-blue-600 p-2 rounded-sm text-white hover:text-gray-400 hover:scale-110 cursor-pointer'><FaFacebook size={20} /></Link>
            <Link to ={"/#"} className='bg-pink-600 p-2 rounded-sm text-white hover:text-gray-400 hover:scale-110 cursor-pointer'><FaInstagram size={20} /></Link>
            <Link to ={"/#"} className='bg-blue-600 p-2 rounded-sm text-white hover:text-gray-400 hover:scale-110 cursor-pointer'><FaTwitter size={20} /></Link>
            <Link to ={"/#"} className='bg-red-600 p-2 rounded-sm text-white hover:text-gray-400 hover:scale-110 cursor-pointer'><FaYoutube size={20} /></Link>
          </div>
               <Button
         title="Sign Up"
         brnType="button"
         containerStyle="mt-10 md:block bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-black rounded-full min-w-[130px] cursor-pointer"
        />
        </div>
   
      </div>

    </footer>
  )
}

export default Footer
