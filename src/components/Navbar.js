import React, { useState , useEffect} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
  const [username, setUsername] = useState('');
  const [userProfilePic, setUserProfilePic] = useState('');
  useEffect(() => {
    // Fetch the username and user profile picture from the database
    // This is just a placeholder, replace it with your actual code
    fetch('/api/user')
      .then(response => response.json())
      .then(data => {
        setUsername(data.username);
        setUserProfilePic(data.profilePic);
      });
  }, []);
  return (
    
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={WafferLogo} alt="Waffer Logo" width="100px" height="100px"/>
      </div>
      <div className="navbar-toggle" onClick={handleMobileMenuToggle}>
        {mobileMenuOpen ? 'X' : <div>&#9776;</div>}
      </div>
      <ul className={`navbar-links ${mobileMenuOpen ? 'show' : ''}`}>
        {userType === 'consumer' ? (
          <>
            <li><Link to="/offers" className="navbar-item">Offers</Link></li>
            <li><Link to="/contact" className="navbar-item">Feedback</Link></li>
            <li className="navbar-item-dropdown">
            <div className="user-info">
  <img src={userProfilePic} alt="User Profile" />
  <div className="username">{username}</div>
</div>
  <div className="navbar-item-dropdown-content">
    <Link to="/profile">Profile</Link>
    <Link to="/logout">Logout</Link>
  </div>
</li>
          </>
        ) : userType === 'business' ? (
          <>
            <li><Link to="/dashboard" className="navbar-item">Dashboard</Link></li>
            <li><Link to="/feedback" className="navbar-item">Feedback</Link></li>
            <li className="navbar-item-dropdown">
            <div className="user-info">
  <img src={userProfilePic} alt="User Profile" />
  <div className="username">{username}</div>
</div>
  <div className="navbar-item-dropdown-content">
    <Link to="/profile">Profile</Link>
    <Link to="/logout">Logout</Link>
  </div>
</li>
          </>
        ) : (
          <>
            <li><Link to="/" className="navbar-item">Home</Link></li>
            <li><Link to="/about" className="navbar-item">About</Link></li>
            
            <li><Link to="/contact" className="navbar-item">Feedback</Link></li>
            <li><Link to="/signin" className="navbar-item" >Sign In</Link></li>
          </>
        )}
      </ul>
    </nav>
 
  );
}

export default Navbar;