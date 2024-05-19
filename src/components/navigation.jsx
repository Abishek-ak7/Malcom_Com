import React from "react";
import '../assets/Navigation.css'
import logo from '../assets/images/logo.png'

function Navigation() {
  return (
    <div className="flex">
        <h1 className="ak  text-white font-extrabold font-serif">MALCOM COMPANY</h1>
        <div className="flex mx-auto space-x-4  font-roboto text-sm">
          <a href="" className="text-white hover:underline b-2">Product</a>
          <a href="" className=" text-white hover:underline">Services</a>
          <a href="" className="  text-white hover:underline">Careers</a>
          <a href="" className="text-white hover:underline">About</a>
          <a href="" className="text-white hover:underline">Invest Us</a>

        </div>
        <div className="flex space-x-6">
          <button className="hover:bg-white hover:w-28 hover:h-7 hover:rounded-2xl hover:text-purple-800 hover:font-bold text-white text-center">Contact Us</button>
          <button className="hover:bg-white hover:w-28 hover:h-7 hover:rounded-2xl hover:text-purple-800 hover:font-bold text-white text-center">Login</button>
        </div>
      
    </div>
  );
}

export default Navigation;
