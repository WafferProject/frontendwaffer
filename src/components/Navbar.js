
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SwitchButton from './SwitchButton'; // Import the SwitchButton component
import WafferLogo from '../images/WafferLogo.png';
const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"><img src={WafferLogo} alt="Waffer Logo" width="90px" height="90px"/></Link>
            </div>
            <div className="navbar-toggle" onClick={handleMobileMenuToggle}>
                {mobileMenuOpen ? 'X' : <div>&#9776;</div>}
            </div>
              <ul className={`navbar-links ${mobileMenuOpen ? 'show' : ''}`}>
            <li><Link to="/about" className="navbar-item">About</Link></li>
            <li><SwitchButton /></li> {/* This is now wrapped in a <li> */}
            {/* <li><Link to="/" className="navbar-item">About</Link></li> */}
           
          <li><Link to="/contact" className="navbar-item">Contact</Link></li>
          <li><Link to="/signin" className="navbar-item">Sign In</Link></li>

        </ul>

        </nav>
    );
}

export default Navbar;
