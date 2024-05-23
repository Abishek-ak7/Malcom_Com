import React from 'react';
import r1 from '../assets/images/Group.png';
import r2 from '../assets/images/Group (1).png'
import image1 from '../assets/images/Group 139.png'
import image2 from '../assets/images/Group 140.png'
import image3 from '../assets/images/Group 141.png'
import '../assets/Services.css';


export default function Services() {
  return (
    <div>
    <div className='mx-auto bg-black '>
    <img src={r1} className='w-28 h-20' alt="side circles" />
    <p className=' text-8xl ml-14 pt-7 font-bold font-arial  p-5 text-white'>Services</p>
    <img src={r2} className='w-28 h-20 ml-auto' alt="circle image" />
    <div class="radial" className=' ml-72 p-16 '>
    <h1 className=' text-purple-500  font-arial font-bold text-5xl'>Secure Your Systems with Expert </h1>
    <h1 className='font-arial font-bold text-white text-5xl p-5 pl-40'>Penetration Testing</h1>
    </div>

    <div className='flex justify-around text-center'>
      <div className='flex-col justify-center items-center w-1/3'>
          <img src={image1} className="w-1/4 ml-44"alt="image1" />
          <div className='text-white font-bold  text-2xl'>
          <h3 >Expert Matching &</h3><h3>Seamless Collaboration</h3>
      </div>
      <div className='font-light text-gray-300'>
      <p>Find the perfect pentester and work together </p>
      <p>flawlessly within the platform.</p></div>
      </div>
      <div><img src={image2} className="w-28 h-28" alt="image2" />
      <div className='text-white font-bold p-5 text-2xl'>
        <h3>AI-Powered Prioritization</h3></div>
      <div className='font-light text-gray-300'>
      <p>Focus on what matters most - prioritize </p>
      <p>vulnerabilities based on real-world risk.</p></div>
      </div>
      <div> <img src={image3} className="w-28 h-28" alt="image3" />
      <div className='text-white font-bold p-5 text-2xl'>
      <h3>Automated Workflows &</h3>
      <h3>Remediation Assistance</h3></div>
      <div className='font-light text-gray-300 '>
      <p>Save time and effort with automated tasks </p>
      <p>and expert guidance</p></div>
      </div>
    </div>
    </div>
    </div>
  )
}