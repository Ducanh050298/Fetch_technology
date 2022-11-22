import "./overlay.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaArrowRight } from "react-icons/fa"

export default function Overlay(){
    const now = 70;
    return(
        <div className="overlaycontainer">
             <p className="overlayp">Available Coin balance</p>
             <h2 className="overlaytitle">340</h2>
             <ProgressBar className="progressbar" now={now} label={`${now}%`} visuallyHidden />
             <p className="overlayp">You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.</p>
             <br></br>
             <a href="#" className="overlink">View tier benefits</a>
             <FaArrowRight style={{color: '#0062FF', fontSize: '20px'}}/>
             <br></br>
             <button className="btn btn-primary">My Coupons</button>
             <br></br>
             <p className="update">Updated : 02/11/2021</p>
        </div>
    )
}