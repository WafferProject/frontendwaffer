import React, { useState } from 'react';
import './SwitchButton.css';
import { Link } from 'react-router-dom';

const SwitchButton = () => {
  const [isConsumer, setIsConsumer] = useState(true); // Setting the initial state

  const handleLeftClick = () => {
    setIsConsumer(true);
  };

  const handleRightClick = () => {
    setIsConsumer(false);
  };

  return (
    <div className="body"> {/* Make sure this div class matches the CSS */}
      
      <div className="button-box">
        <div id="btn" style={{ left: isConsumer ? '0' : '50%' }}></div>
       <Link to="/consumer">
        <button type="button" className="toggle-btn" onClick={handleLeftClick}>
          Consumer
        </button></Link>
        <Link to="/business">
        <button type="button" className="toggle-btn" onClick={handleRightClick}>
          Business
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SwitchButton;
