// AboutUs.js
import React from 'react';
import './About.css'; 
import { useState } from 'react';
import teamMemberImage1 from '../../images/eyaaa.jpg';
import teamMemberImage2 from '../../images/yasmine2.jpg';
import teamMemberImage3 from '../../images/salmen.png';
import teamMemberImage5 from '../../images/amine.jpg';
import Gif from '../../images/giphy.gif';
import { FaLinkedin } from 'react-icons/fa'; // import the LinkedIn icon


function About() {
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = (phoneNumber) => {
    setShowModal(true);
  };

  const handleCloseClick = () => {
    setShowModal(false);
  };
  const [isTextVisible, setTextVisible] = useState(false);
  return (
    <div>
      <div className="about-container">
     <div className="about-section">
  <h1>About Our App </h1>
  <p>"Waffer – Connecting Culinary Surpluses to Savvy Shoppers, Bridging Affordability and Sustainability."</p>
  <p>
    "Welcome to the flavor revolution at Waffer! 🎉 Our app is more than just a food platform, it's a culinary adventure where businesses and users come together in a dance of delicious savings and sustainability. 
    {isTextVisible && " 🌍💸 With Waffer, businesses transform surplus delights into a revenue feast, turning food waste into a distant memory. For users, it's a pocket-friendly party with every order – delightful meals at delightful prices! 🎈🍽️Join our community, where every purchase is a step towards economic efficiency, environmental friendliness, and your next fantastic meal. Let's turn surplus into smiles and savings! 🌈🌮 #WafferMagic"}
  </p>
  <button onClick={() => setTextVisible(!isTextVisible)}>
    {isTextVisible ? "Read Less" : "Read More"}
  </button>
</div>
<img src={Gif}  alt="GIF" className="about-gif" />
</div>

      <h2 style={{textAlign: "center"}}>Our Team</h2>
      <div className="row">
        {/* Team Member 1 */}
       
        <div className="column">
          <div className="card">
          <img src={teamMemberImage1} alt="Eya" style={{width: "100%"}} />
            <div className="container">
              <h2>Eya Ouenniche</h2>
              <p className="title">CEO & Founder</p>
              <p>Waffer's CEO and Founder, leads with a tech-savvy vision, driving innovation and collaboration in our software development journey.</p>
              <p>EyaOuenniche@gmail.com</p>
              <p><button className="button" onClick={() => handleContactClick('123-456-7890')}>Contact</button></p>
            </div>
          </div>
        </div>
    

   {showModal && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={handleCloseClick}>&times;</span>
      <p>Contact Number: 123-456-7890</p>
    </div>
  </div>
    )}

        {/* Team Member 2 */}
        <div className="column">
          <div className="card">
          <img src={teamMemberImage2} alt="Yasmine" style={{width: "100%"}} />
            <div className="container">
              <h2>Yasmine Beji</h2>
              <p className="title">Co-Founder and Frontend Developper</p>
              <p> Our Co-founder and Front-end Developer, crafts seamless user experiences, bringing a blend of design and functionality to Waffer.</p>
              <p>YasmineBeji@gmail.com</p>
              <p><button className="button" onClick={() => handleContactClick('123-456-7890')}>Contact</button></p>
            </div>
          </div>
        </div>

        {showModal && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={handleCloseClick}>&times;</span>
      <p>Contact Number: 123-456-7890</p>
    </div>
  </div>
    )}
        {/* Team Member 3 */}
        <div className="column">
          <div className="card">
          <img src={teamMemberImage3} alt="Walid" style={{width: "100%"}} />
            <div className="container">
              <h2>Walid Mellouli</h2>
              <p className="title">Co-Founder and Frontend Developer</p>
              <p> brings the perfect blend of creativity and technical expertise to Waffer, shaping the user experience with innovative design and seamless functionality.</p>
              <p>WalidMellouli@gmail.com</p>
              <p><button className="button" onClick={() => handleContactClick('123-456-7890')}>Contact</button></p>
            </div>
          </div>
        </div>
        {showModal && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={handleCloseClick}>&times;</span>
      <p>Contact Number: 123-456-7890</p>
    </div>
  </div>
    )}
    <div className="row">
    {/* Team Member 4 */}
<div className="column">
  <div className="card">
  <img src={teamMemberImage3}  alt="Salmen" style={{width: "100%"}} />
    <div className="container">
      <h2>Mohamed Salmen Gharsellaoui</h2>
      <p className="title">Co-Founder and Backend Developer</p>
      <p> Our Co-founder and Backend Wizard at Waffer, engineers the digital magic behind our innovation, turning code into seamless functionality.</p>
      <p>MohamedSalmenGharsellaoui@gmail.com</p>
      <p><button className="button" onClick={() => handleContactClick('123-456-7890')}>Contact</button></p>
    </div>
  </div>
</div>

{/* Team Member 5 */}
<div className="column">
  <div className="card">
  <img src={teamMemberImage5} alt="Amine" style={{width: "100%"}} />
    <div className="container">
      <h2>Mohamed Amine Ben Aoun</h2>
      <p className="title">Co-Founder and Marketing Manager </p>
      <p>our Co-founder and Marketing Manager, spearheads Waffer's outreach with strategic vision and creativity, ensuring our brand resonates in the digital landscape.</p>
      <p>MohamedAmineBenAoun@gmail.com</p>
      <p><button className="button" onClick={() => handleContactClick('123-456-7890')}>Contact</button></p>
    </div>
  </div>
</div>
</div>


      </div>
    </div>
  );
}

export default About;