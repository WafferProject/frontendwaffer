

import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SwitchButton from './SwitchButton';
import WafferLogo from '../images/WafferLogo.png';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userType, setUserType] = useState(''); // Add this state

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Call this function when a user signs in
    const handleSignIn = (type) => {
        setUserType(type);
    };
   

    return (
        <nav className="navbar">
            <div className="navbar-logo">
               <img src={WafferLogo} alt="Waffer Logo" width="90px" height="90px"/>
            </div>
            <div className="navbar-toggle" onClick={handleMobileMenuToggle}>
                {mobileMenuOpen ? 'X' : <div>&#9776;</div>}
            </div>
            <ul className={`navbar-links ${mobileMenuOpen ? 'show' : ''}`}>
                {userType === 'consumer' ? (
                    <>
                         
                        <li><Link to="/offers" className="navbar-item">Offers</Link></li>
                        <li><Link to="/feedback" className="navbar-item">Feedback</Link></li>
                        <li><Link to="/logout">
                            <button className="Btn"> 
                                <div className="sign">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" fill="white"/>
                                    </svg>
                                </div>
                                <div className="text">Logout</div>
                            </button></Link></li>
                    </>
                ) : userType === 'business' ? (
                    <>
                        
                        <li><Link to="/dashboard" className="navbar-item">Dashboard</Link></li>
                        <li><Link to="/feedback" className="navbar-item">Feedback</Link></li>
                        <li><Link to="/logout">
                            <button class="Btn"> 
                                <div className="sign">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" fill="white"/>
                                    </svg>
                                </div>
                                <div className="text">Logout</div>
                            </button></Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/" className="navbar-item">Home</Link></li>
                        <li><Link to="/about" className="navbar-item">About</Link></li>
                        {/* <li><SwitchButton /></li> */}
                        <li><Link to="/contact" className="navbar-item">Contact</Link></li>
                        <li><Link to="/signin" className="navbar-item"onClick={handleSignIn('consumer')}>Sign In</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );

}

export default Navbar;
