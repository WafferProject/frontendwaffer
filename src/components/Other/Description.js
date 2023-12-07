import React, { useState } from 'react';
import './Description.css';
import sec1Image from '../images/sect1.jpg';
import sec2Image from '../images/sect2.jpg';
import sec3Image from '../images/sect3.jpg';
import sec4Image from '../images/sect4.jpg';
import sec5Image from '../images/sect5.png';
const Description = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveCard(index);
    };

    const handleMouseLeave = () => {
        setActiveCard(null);
    };

    const cardsData = [
        { title: 'Welcome to Waffer!', paragraph: 'We are a flavor revolution! 🌍💸 Connect businesses with surplus delights for savings and sustainability. Join us!' ,  backgroundImage: sec1Image },
        { title: 'A Culinary Adventure', paragraph: 'We revolutionize your dining with taste, savings, and sustainability. 🌮🚀 Join our culinary adventure where every bite tells a story!' ,  backgroundImage: sec2Image},
        { title: 'Transforming Food Waste', paragraph: 'We turn surplus into smiles and savings! 🌱🍔  The journey to transform excess into revenue , making food waste a thing of the past.' ,  backgroundImage: sec3Image },
        { title: ' Pocket-Friendly Parties', paragraph: 'Every order is a pocket-friendly party! 🎈🍽️ Join us for delightful meals and prices that delight, where flavor meets affordability in every bite.', backgroundImage: sec4Image },
        { title: 'Flavorful Future', paragraph: ' We are revolutionizing savings and sustainability! 🌍🌱 Join our eco-friendly culinary movement. The Waffer revolution starts now!', backgroundImage: sec5Image  }
    ];
    
    const cards = cardsData.map((card, index) => (
        <p
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
               className="card-background"
            style={{ 
                backgroundImage: `url(${card.backgroundImage})`, // use url() function
                backgroundSize: 'cover', // cover the entire area of the element
                backgroundPosition: 'center', // center the image
                backgroundRepeat: 'no-repeat', // don't repeat the image
             
            }}
            key={index}
        >
            <span>{activeCard === index ? card.paragraph : card.title}</span>
        </p>
    ));

    return (
    
        <div className="description-container">
            
            <div className="description-card">
                
                {cards}
            </div>
        </div>
     
    );
}

export default Description;