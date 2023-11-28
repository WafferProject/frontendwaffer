import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SplitScreen.css';
import { useNavigate } from "react-router-dom";

const SplitScreen = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Navigate to the SplitScreen component
    navigate("/SignUp");
  };
  return (
    <div className="row">
      {/* Left side */}
      <div className="col-md-6">
        <div className="leftside d-flex justify-content-center align-items-center">
          
            <button className="btnleft" onClick={handleGetStartedClick}>SIGNUP AS A BUSINESS</button>
        </div>

      </div>
      {/* Right side */}
      <div className="col-md-6">
        <div className="rightside d-flex justify-content-center align-items-center">
            <button className="btnright" onClick={handleGetStartedClick}>  SIGNUP AS A USER  </button>
          
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;
