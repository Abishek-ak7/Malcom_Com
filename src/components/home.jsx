import Navigation from './navigation';
import '../assets/Home.css'
import img from '../assets/images/Malcom1.png'

function home() {
  return (
    <div className="Home">
      <Navigation className="m-11"/>
      <img src={img} className='mx-auto mt-40' alt="AK"></img>
    </div>
  );
}

export default home;
