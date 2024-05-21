import Navigation from './navigation';
import '../assets/Home.css'
import img from '../assets/images/Malcom2.png'

function home() {
  return (
    <div className="Home">
      <Navigation className="m-11"/>
      <img src={img} className='mx-auto mt-2 w-3/4 h-2/4 sm:w-3/4 sm:h-2/4 md:w-3/4 md:h-3/4' alt="AK"></img>
      
    </div>
  );
}

export default home;
