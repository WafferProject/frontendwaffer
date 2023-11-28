// src/components/Home/Homeb.js

import './Homeb.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import Button from './Letsgetstartedbutton';

const Homeb = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup'); // navigate to the signup page when the button is clicked
    };

    return (
        <div>
            <div className="header-container text-center">
                <h1 className="text-6xl">Welcome to Waffer</h1>
                <h4 className="text-4xl">Your very own personal tutorial corner</h4>
            </div>
            <div className="banner-container">
                <Banner />
                <div className="button-container">
                    <Button text="Let's Get Started" onClick={handleClick} /> {/* pass the handleClick function as a prop */}
                </div>
            </div>
        </div>
    );
};

export default Homeb;