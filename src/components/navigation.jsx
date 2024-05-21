import React from "react";
import '../assets/Navigation.css'
import logo from '../assets/images/logo.png'

function Navigation() {
  return (
    <div className="flex  p-3">

        <h1 className="ak  text-white font-extrabold font-serif">MALCOM COMPANY</h1>
        <div className="flex mx-auto space-x-24  font-roboto text-sm">
          <a href="" className="hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid ">Product</a>
          <a href="" className=" hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid b-2">Services</a>
          <a href="" className=" hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid b-2">Careers</a>
          <a href="" className="hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid b-2">About</a>

        </div>
        <div className="flex space-x-6">
          <button className="hover:bg-white text-lg font-bold hover:w-28 w-28 font-Mr mr-10 hover:h-7 hover:rounded-2xl hover:text-purple-800 hover:font-bold text-white text-center">Donate Us</button>        </div>
      
    </div>
  );
}

export default Navigation;
