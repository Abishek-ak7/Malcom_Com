import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';



function Main() {
    return(
        <div className='bg-black'>
            <Home />
            <About />
            {/* <Services /> */}
        </div>
    );


}
export default Main;