import './App.css';
import  MyImage from './ress/pht.jpg'

function img() {
    return(
        <div className="img">
           <img src={MyImage} className='im' alt="profile picture " />
        </div>
    );
}
export default img;