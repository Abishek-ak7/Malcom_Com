import Navigation from './navigation';
import '../assets/Home.css';
import img from '../assets/images/Malcom2.png';
import fire from '../assets/images/fire.gif';
import ball from '../assets/images/fireball.gif';
import debug from '../assets/images/Debug.gif';
import print from '../assets/images/fingerprint.gif';

function Home() {
  return (
    <div className="Home">
      <Navigation className="m-11"/>
      <img src={img} className='mx-auto mt-2 w-3/4 h-2/4 sm:w-3/4 sm:h-2/4 md:w-3/4 md:h-3/4' alt="AK"></img>

      <div className='flex items-center justify-around mt-10'>
        <img src={fire} className='w-14 bg-purple-950 border-2 rounded-xl'></img>
        <img src={ball} className='w-14 bg-purple-950 border-2 rounded-xl'></img>
        <img src={debug} className='w-14 bg-purple-950 border-2 rounded-xl'></img>
        <img src={print} className='w-14 bg-purple-950 border-2 rounded-xl'></img>
      </div>

    </div>

    
  );
}

export default Home;