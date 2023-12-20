import React from 'react';
import Description from '../components/Other/Description.js'; 
import TeamCard from '../components/Other/TeamCard.js'; 

const AboutUs = () => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>About Us</h1> 
      <Description />

      <h2>Our Team</h2> 
      <TeamCard />
    </div>
  );
}

export default AboutUs;