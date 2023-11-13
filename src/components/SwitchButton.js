import React, { useState } from 'react';
import './SwitchButton.css';
import { Link } from 'react-router-dom';

const SwitchButton = () => {
  const [isConsumer, setIsConsumer] = useState(null);

  const handleLeftClick = () => {
    setIsConsumer(true);
  };

  const handleRightClick = () => {
    setIsConsumer(false);
  };

  return (      
    <div className="button-box">
      <div id="btn" style={{ left: isConsumer ? '0' : '50%' }}></div>
      <Link to="/consumer">
        <button type="button" className={`toggle-btn ${isConsumer ? 'active' : ''}`} onClick={handleLeftClick}>
          Consumer
        </button>
      </Link>
      <Link to="/business">
        <button type="button" className={`toggle-btn ${!isConsumer ? 'active' : ''}`} onClick={handleRightClick}>
          Business
        </button>
      </Link>
    </div>
  );
};



export default SwitchButton;
