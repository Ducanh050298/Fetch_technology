import Footer from "../footer/Footer"
import Menuproduct from "../menuproduct/Menuproduct"
import Overlay from "../overlay/Overlay"
import "./Header.css"
import { FaArrowCircleLeft } from "react-icons/fa"
import { IoIosWifi } from "react-icons/io"
import { BsBatteryFull } from "react-icons/bs"
import { GiNetworkBars } from "react-icons/gi"

export default function Header(){
    return(
    <div>
        <div className="header">
            <div className="phonenetwork">
                 <GiNetworkBars className="network" /> <IoIosWifi className="right-icon" /> <BsBatteryFull className="right-icon" />
            </div>
            <FaArrowCircleLeft style={{color:"white", fontSize:"50px", marginTop:"2rem", paddingLeft:"0.8rem"}}/>
           <h3 className="Silver">Silver Tier</h3>
           <p className="para">In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</p>
           <Overlay/>   
        </div>
        <Menuproduct/>
        <Footer/>
    </div>
    )}