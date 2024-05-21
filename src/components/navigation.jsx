import React from "react";
import '../assets/Navigation.css'
import logo from '../assets/images/logo.png'

function Navigation() {
  return (
  <div>
    <div className="flex  p-3">

        <h1 className="ak  text-white font-extrabold font-serif">MALCOM COMPANY</h1>
        <div className="flex mx-auto space-x-24  font-roboto text-sm">
          <a href="" className="hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid lg:block md:block sm:hidden ">Product</a>
          <a href="" className=" hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid b-2  lg:block md:block sm:hidden">Services</a>
          <a href="" className=" hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid b-2 lg:block md:block sm:hidden">Careers</a>
          <a href="" className="hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid b-2  lg:block md:block sm:hidden">About</a>

        </div>
        <div className="flex space-x-6">
          <button className="hover:bg-white text-lg font-bold hover:w-28 w-28 font-Mr mr-10 hover:h-7 hover:rounded-2xl lg:block md:block sm:hidden hover:text-purple-800 hover:font-bold text-white text-center">Donate Us</button>    
          <button class="md:hidden lg:hidden sm:block bg-white   rounded-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg></button>   
            </div>
     </div>
     <div className="lg:hidden md:hidden sm:block text-md border w-1/4 ml-auto ">
          <a href="" className=" text-purple-400 p-2 flex hover:text-white">Product</a>
          <a href="" className="text-purple-400 p-2 flex hover:text-white"> Services</a>
          <a href="" className="text-purple-400 p-2 flex hover:text-white "> Careers</a>
          <a href="" className="text-purple-400 p-2 flex  hover:text-white"> About</a>
          <button className="hover:bg-white text-md font-sans p-1 ml-1  hover:rounded-xl lg:hidden md:hidden sm:block hover:text-purple-800 hover:font-bold text-purple-400 ">Donate Us</button>        </div>

     </div>
  );
}

export default Navigation;
