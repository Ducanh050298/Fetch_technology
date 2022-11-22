import "./footer.css"
import {RiHomeLine} from "react-icons/ri"
import {GrNotification} from "react-icons/gr"
import {BsWallet} from "react-icons/bs"
import{VscAccount} from "react-icons/vsc"

export default function Footer(){
    return(
        <div>
            <div className="footer"> 
                <RiHomeLine className="footer-icon"/>
                <GrNotification className="footer-icon"/>
                <BsWallet className="footer-icon"/>
                <VscAccount className="footer-icon"/>
            </div>
        </div>
    )
}