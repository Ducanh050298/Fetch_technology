import "./menuproduct.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import petro1 from './picture/petro1.png';
import rental from './picture/rental.png';
import food from './picture/food.png';

export default function Menuproduct(){
    return(
        <div className="menucontainer">
            <div>
                <h5>Petro</h5>
                <div className="row">
                    <div className="card card1" style={{width: "18rem"}}>
                        <img src={petro1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">15 Coins</h5>
                            <p className="card-text">50% discount for every $100 top-up on your Shell Petrol Card</p>
                        </div>
                    </div>
                    <div className="card card2" style={{width: "18rem"}}>
                        <img src={petro1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">1,000 Coins</h5>
                                <p className="card-text">70% discount top-up on your Shell Petrol Card</p>
                                <p className="card-notice">Insufficients coins</p>
                            </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div>
                <h5>Rental Rebate</h5>
                <div className="row">
                    <div className="card card1" style={{width: "18rem"}}>
                        <img src={rental} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">20 Coins</h5>
                            <p className="card-text">Get $20 Rental rebate</p>
                        </div>
                    </div>
                    <div className="card card2" style={{width: "18rem"}}>
                        <img src={rental} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">15 Coins</h5>
                            <p className="card-text">Get $500 Rental rebate</p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div>
                <h5>Food and Beverage</h5>
                <div className="row">
                    <div className="card card1" style={{width: "18rem"}}>
                        <img src={food} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">25 Coins</h5>
                            <p className="card-text">NTUC Fairprice $50 Voucher</p>
                        </div>
                    </div>
                    <div className="card card2" style={{width: "18rem"}}>
                        <img src={food} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">5 Coins</h5>
                            <p className="card-text">Free Cold Stone Sundae at any flavour!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}