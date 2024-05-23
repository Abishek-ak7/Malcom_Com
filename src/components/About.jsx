import React from 'react'
import keyboard from '../assets/images/keyboardfx_preset_3.gif'

function About() {
  return (
    <div className='mt-2 bg-black'>
    <div className="min-h-screen flex-col  items-start justify-center ">
        <div className="w-full max-w-6xl pt-16 px-16 mx-auto">
            <p className="text-gray-800 text-4xl font-bold leading-relaxed text-justify ">
                To revolutionize access to CyberSecurity solutions and knowledge,
                empowering every individual to unleash their digital resilience
                fully.Through collaboration, innovation, and a steadfast dedication to
                inclusivity, we aspire to fortify a more secure and inspiring digital
                world.
            </p>
        </div> 
        <div className='p-2 mt-7'>
          <img src={keyboard} className='mx-auto' alt="keyboard" />
        </div>
    </div>
    
    </div>
  );
}
export default About;
