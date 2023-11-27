import React, { useState } from 'react';
import "./ContactForm.css";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PhoneIcon from '@mui/icons-material/Phone'; // Import PhoneIcon or another icon you want to use
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Alert from '@mui/material/Alert';
import { faBedPulse, faSliders } from '@fortawesome/free-solid-svg-icons';
function ContactForm() {
    const [data,setData]=useState({
        FirstName:"",
        LastName:"",
        email:"",
        message:""

    });
    const [alertOpen, setAlertOpen] = useState(false);

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value})
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        
        setAlertOpen(true);
    }

  return (
    <form onSubmit={handleSubmit}>
         
    <div className="containerForm">
    {alertOpen && (
             <Alert
             severity="success"
             onClose={() => setAlertOpen(false)}
             
                style={{
                   position: 'absolute',
                    top: '20px',
                    right: '20px',
                    zIndex: 9999,
                    transition: 'transform 0.3s ease-in-out',
                    transform: alertOpen ? 'translateX(0)' : 'translateX(100%)'
                
             }}
         >
             Your message was sent !
         </Alert>

            )}
      <div className="containerContact">
        <div className="contactinfo">
            <div>
                <h2>Contact Info</h2>
                <ul className="info">
                    <li>
                        <span> <div className='icon'>
                            <LocalPostOfficeIcon /></div></span>
                        <span>waffer@gmail.com</span>
                    </li>
                    <li>
                        <span><div className='icon'>
                            <PhoneIcon /></div></span>
                        <span>+21639058676</span>
                    </li>
                    
                </ul>
                </div>
                <ul className="sci">
                    <li><div className="iconSocial"><FacebookIcon/></div></li>
                    <li><div className="iconSocial"><InstagramIcon/></div></li>
                    <li><div className="iconSocial"><LinkedInIcon/></div></li>
                </ul>
           
        </div>
        <div className="contactform">
            <h2>Send a Message</h2>
            <div className="formBox">
                <div className="inputBox w50">
                    <input type="text" name="FirstName" onChange={handleChange} value={data.FirstName}required/>
                        <span> First Name</span>
                 
                </div>
                <div className="inputBox w50">
                    <input type="text" name="LastName" onChange={handleChange} value={data.LastName} required/>
                        <span> Last Name</span>
                 
                </div>
                <div className="inputBox w50">
                    <input type="email" name="email" onChange={handleChange} value={data.email} required/>
                        <span> Email Address</span>
                    
                </div>
                <div className="inputBox w100">
                    <textarea name="message" required onChange={handleChange} value={data.message}></textarea>
                        <span> Write your message here...</span>
                    
                </div>
                <div className="inputBox w100">
                    <input type="submit" value="Send" />
                </div>
            </div>
        </div>
      </div>
    

    </div>
   
    </form>
  )
}

export default ContactForm;
