import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SplitScreen.css';
import { Link } from 'react-router-dom';


// Import your image
import rightImage from '../images/Orderfood.png';
import leftImage from '../images/helppartner.png';

 
const SplitScreen = () => {
    return (
      <div className="row">
        {/* Left side */}
        <div className="col-md-6">
          <div className="leftside d-flex justify-content-center align-items-center">
  
            <h1 className="sell-heading"> Sell</h1>
            <p className="texts">Sell, Don't Waste. Partner with us, Sign Up!</p>
            <Link to="/SignUp" className="btnleft">
              SIGNUP AS A USER
            </Link>
            <img src={leftImage} alt=" " className="left-image" />
          </div>
  
        </div>
        {/* Right side */}
        <div className="col-md-6">
          <div className="rightside d-flex justify-content-center align-items-center">
  
              <h1 className="buy-heading"> Buy</h1>
              <p className="texts">Savor Discounts! Sign up for wallet-friendly indulgence </p>
              <Link to="/SignUp" className="btnright">
                SIGNUP AS A USER
              </Link>
  
            <img src={rightImage} alt=" " className="right-image" />
          </div>
        </div>
      </div>
    );
  };
  export default SplitScreen;