import React from 'react';
import './TeamCard.css';
import { FaLinkedin } from 'react-icons/fa'; // import the LinkedIn icon
import eyaImage from '../images/eyaaa.jpg';
import salmenImage from '../images/salmen.png';
import yasmineImage from '../images/yasmine2.jpg';
import amineImage from '../images/amine.jpg';



const teamMembers = [
    {
     
        image: eyaImage,
        name: 'Eya Ouenniche',
        title: 'CEO & Founder',
        email: 'eyaouenniche@gmail.com',
        linkedin: 'https://www.linkedin.com/in/eya-ouenniche/', // LinkedIn page URL
    },
    {
  
      image: salmenImage,
      name: 'Mohamed Salmen Gharsellaoui',
      title: 'Co-Founder and Backend Developer',
      description: 'Team Member Description',
      email: 'mohamedsalmengharsellaoui@gmail.com',
      linkedin: 'https://www.linkedin.com/in/eya-ouenniche/', 
    },
    {
     
      image: yasmineImage,
      name: 'Yasmine Beji',
      title: 'Co-Founder and Frontend Developer',
      description: 'Team Member Description',
      email: 'yasminebeji@gmail.com',
      linkedin: 'https://www.linkedin.com/in/eya-ouenniche/', 
    },
    {
  
      image: 'path_to_image',
      name: 'Walid Mellouli',
      title: 'Co-Founder and Frontend Developer',
      description: 'Team Member Description',
      email: 'walidmellouli@gmail.com',
      linkedin: 'https://www.linkedin.com/in/eya-ouenniche/', 
    },
    {
      
      image: amineImage,
      name: 'Mohamed Amine Ben Aoun',
      title: 'Co-Founder and Marketing Manager ',
      description: 'Team Member Description',
      email: 'teamMember5@example.com',
      linkedin: 'https://www.linkedin.com/in/eya-ouenniche/', 
    },
  ];
  
  function TeamCard() {
    return (
      <div className="team-card-container">
        {teamMembers.map((teamMember, index) => (
          <div key={index} className={`card ${teamMember.color}`}>
            <img src={teamMember.image} alt={teamMember.name} />
            <p className="second-text">{teamMember.name}</p>
            <p>{teamMember.title}</p>
            <p>{teamMember.email}</p>
            <a href={teamMember.linkedin} target="_blank" rel="noopener noreferrer" className="Btn">
              <FaLinkedin className="logoIcon" /> {/* LinkedIn icon */}
            </a>
          </div>
        ))}
      </div>
    );
  }
  
  export default TeamCard;