// src/components/Letsgetstartedbutton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Letsgetstartedbutton.css';

const Letsgetstartedbutton = ({ text, onClick }) => { // add the onClick prop
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup'); // navigate to the signup page
        if (onClick) {
            onClick(); // call the onClick prop if it exists
        }
    };

    return (
        <button className="btn" onClick={handleClick}>{text}</button>
    );
};

export default Letsgetstartedbutton;