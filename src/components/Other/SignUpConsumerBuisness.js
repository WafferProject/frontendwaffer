import React, { useState } from "react";
import * as Components from "./utilsSignUpIn";
import AddButton from "./AddButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { RadioGroup, FormLabel, Radio, FormControlLabel } from "@mui/material";
import { useAuth } from "../AuthContext";

const SignUpConsumerBuisness = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const consumerValidationRules = {
    first_name: {
      validator: (value) => value.trim() !== "",
      errorMessage: "First name is required",
    },
    last_name: {
      validator: (value) => value.trim() !== "",
      errorMessage: "Last name is required",
    },
    phone_number: {
      validator: (value) => /^\d+$/.test(value),
      errorMessage: "Phone number must be numeric",
    },
    email: {
      validator: (value) => /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(value),
      errorMessage: "Invalid email format",
    },
    password: {
      validator: (value) => /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(value),
      errorMessage: "Password must be 8-20 characters long, include uppercase and lowercase letters, and a number",
    }
    
  };
  const businessValidationRules = {
    tax_registration_number: {
      validator: (value) => /^\d+$/.test(value),
      errorMessage: "Tax registration number must be numeric",
    },
    name: {
      validator: (value) => value.trim() !== "",
      errorMessage: "Name is required",
    },
    email: {
      validator: (value) => /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(value),
      errorMessage: "Invalid email format",
    },
    password: {
      validator: (value) => /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(value),
      errorMessage: "Password must be 8-20 characters long, include uppercase and lowercase letters, and a number",
    },
    opening_time: {
      validator: (value) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(value),
      errorMessage: "Time must be in HH:MM format",
    },
    closing_time: {
      validator: (value) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(value),
      errorMessage: "Time must be in HH:MM format",
    },
    lat: {
      validator: (value) => value !== null && value !== "",
      errorMessage: "Latitude is required",
    },
    long: {
      validator: (value) => value !== null && value !== "",
      errorMessage: "Longitude is required",
    },
  };

  const validateInput = (formType, name, value) => {
    const rules = formType === 'business' ? businessValidationRules : consumerValidationRules;
    if (rules[name] && !rules[name].validator(value)) {
      return rules[name].errorMessage;
    }
    return "";
  };
  
  const {isBuisness,  setIsBuisness} =useAuth();

  const [consumerForm, setConsumerForm] = useState({
    first_name: "",
    last_name: "",
    occupation: "",
    phone_number: "",
    email: "",
    password: "",
  });

  const [businessForm, setBusinessForm] = useState({
    tax_registration_number: "",
    name: "",
    location: [null, null],
    work_phones: [""], // Initial state with one empty phone number
    email: "",
    description: "",
    password: "",
    opening_time: "",
    closing_time: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const entity = isBuisness ? "buisness" : "consumer";
    const url = `http://localhost:8080/api/${entity}/signup`;
    const signupObject = isBuisness ? businessForm : consumerForm;
    console.log(signupObject);
    console.log(url);
    axios
      .post(url, signupObject)
      .then((response) => {
        console.log(
          "server responded from " +
            url +
            " with " +
            JSON.stringify(response.data)
        );
        navigate("/signin");
      })
      .catch((error) => {
        console.log("error  " + JSON.stringify(error.response.data.error));
        // alert("error with signup ");
        setAlertOpen(true);
      });
    }
    
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  const formType = isBuisness ? 'business' : 'consumer';

  const errorMessage = validateInput(formType, name, value);
 
  setErrors({ ...errors, [name]: errorMessage });

  if (!errorMessage) {
    console.log(isBuisness ? businessForm : consumerForm);
    
    console.log(name + "  " + value);
    const newField = isBuisness
      ? { ...businessForm, [name]: value }
      : { ...consumerForm, [name]: value };
    isBuisness ? setBusinessForm(newField) : setConsumerForm(newField);
  }
};

  const handleBuisnessPhoneChange = (event, index) => {
    const values = [...businessForm.work_phones];
    values[index] = event.target.value;
    setBusinessForm({ ...businessForm, work_phones: values });
  }
  
  const addBuisnessPhone = () => {
    setBusinessForm((prevForm) => ({
      ...prevForm,
      work_phones: [...prevForm.work_phones, ""],
    }));
  };

  const handleBuisnessLocationChange = (event) => {
    const { name, value } = event.target;
    const errorMessage = validateInput('business', name, value);
    setErrors({ ...errors, [name]: errorMessage });
    
    const locationValue = [...businessForm.location];

    name === "lat" ? (locationValue[0] = value) : (locationValue[1] = value);

    setBusinessForm({ ...businessForm, location: locationValue });
  };

  return (
    // consumer view
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {alertOpen && (
             <Alert
             variant="filled"
             severity="error"
             onClose={() => setAlertOpen(false)}
             
                style={{
                   position: 'absolute',
                    top: '20px',
                    right: '20px',
                    zIndex: 9999,
                    width: '300px',
                    fontSize: '1.2rem',
                    transition: 'transform 0.3s ease-in-out',
                    transform: alertOpen ? 'translateX(0)' : 'translateX(100%)'
                
             }}
         >
         Error with signup
  
             
         </Alert>)}

    <Components.Container>
      <Components.SignUpContainer signIn={isBuisness}>
        <Components.Form>
          <Components.Title>Create Account Consumer </Components.Title>
          <Components.Input
            name="first_name"
            placeholder="First Name"
            required
            onChange={handleInputChange}
          />
          {errors.first_name && <div style={{ color: 'red' }}>{errors.first_name}</div>}
          <Components.Input
            name="last_name"
            placeholder="Last Name"
            required
            onChange={handleInputChange}
          />
           {errors.last_name && <div style={{ color: 'red' }}>{errors.last_name}</div>}

          <FormLabel style={{ marginTop: "10px" }}>Occupation</FormLabel>
          <RadioGroup row name="occupation" onChange={handleInputChange}>
            <FormControlLabel
              value="student"
              control={<Radio />}
              label="student"
            />
            <FormControlLabel
              value="employee"
              control={<Radio />}
              label="employee"
            />
          </RadioGroup>
          <Components.Input
            type="tel"
            name="phone_number"
            placeholder="Phone Number"
            required
            onChange={handleInputChange}
          />
           {errors.phone_number && <div style={{ color: 'red' }}>{errors.phone_number}</div>}
          <Components.Input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={handleInputChange}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handleInputChange}
          />
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
            <Components.Button onClick={handleSubmit}>
              Sign Up
            </Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      {/* buisness view */}

      <Components.SignInContainer signIn={isBuisness}>
        <Components.Form >
          <Components.Title>Create Account Business</Components.Title>
          <Components.Input
            type="text"
            placeholder="Tax Registration Number"
            required
            pattern="\d+"
            title="Please enter only numbers."
            style={{ height: "30px", width: "100%" }}
            onChange={handleInputChange}
            name="tax_registration_number"
          />
          
          {errors.tax_registration_number && <div style={{ color: 'red' }}>{errors.tax_registration_number}</div>}

          <Components.Input
            placeholder="Your buisness name"
            name="name"
            required
            style={{ height: "30px", width: "100%" }}
            onChange={handleInputChange}
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

          <Components.Input
            placeholder="Opening Time"
            name="opening_time"
            required
            style={{ height: "30px", width: "100%" }}
            onChange={handleInputChange}
          />
          {errors.opening_time && <div style={{ color: 'red' }}>{errors.opening_time}</div>}
          <Components.Input
            placeholder="Closing Time"
            name="closing_time"
            required
            style={{ height: "30px", width: "100%" }}
            onChange={handleInputChange}
          />
          {errors.closing_time && <div style={{ color: 'red' }}>{errors.closing_time}</div>}

          <div style={{ display: "flex", gap: "15px" }}>
            <Components.Input
              placeholder="lat"
              name="lat"
              required
              style={{ height: "30px", width: "30%" }}
              onChange={handleBuisnessLocationChange}
            />
            {errors.lat && <div style={{ color: 'red' }}>{errors.lat}</div>}
            <Components.Input
              placeholder="long"
              name="long"
              required
              style={{ height: "30px", width: "30%" }}
              onChange={handleBuisnessLocationChange}
            />
             {errors.long && <div style={{ color: 'red' }}>{errors.long}</div>}
          </div>

          {businessForm.work_phones.map((phoneNumber, index) => (
            <div
              key={index}
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <Components.Input
                type="tel"
                id={index}
                placeholder={`Phone Number ${index + 1}`}
                required
                style={{ height: "30px", width: "90%", marginRight: "10px" }}
                name="work_phones"
                onChange={(e) => {
                  handleBuisnessPhoneChange(e, index);
                }}
              />
              {businessForm.work_phones.length < 2 && (
                <AddButton onClick={addBuisnessPhone} />
              )}
            </div>
          ))}

          <Components.Input
            type="email"
            placeholder="Email"
            name="email"
            required
            style={{ height: "30px", width: "100%" }}
            onChange={handleInputChange}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          <Components.Input
            placeholder="Description"
            name="description"
            required
            onChange={handleInputChange}
            style={{ height: "30px", width: "100%" }}
          />

          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
            required
            style={{ height: "30px", width: "100%" }}
            onChange={handleInputChange}
          />
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}

            <Components.Button onClick={handleSubmit} >Sign Up</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signIn={isBuisness}>
        <Components.Overlay signIn={isBuisness}>
          <Components.LeftOverlayPanel signIn={isBuisness}>
            <Components.Title>You Wanna Join Us ?</Components.Title>
            <Components.Paragraph>
              I am a Business and i want to create an account
            </Components.Paragraph>
            <Components.GhostButton
              onClick={() => setIsBuisness(true)}
            >
              Sign Up Business
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signIn={isBuisness}>
            <Components.Title>You Wanna Join Us ?</Components.Title>
            <Components.Paragraph>
              I am a Consumer and i want to create an account
            </Components.Paragraph>
            <Components.GhostButton
              onClick={() => setIsBuisness(false)}
            >
              Sign Up Consumer
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
    </div>
  );
};

export default SignUpConsumerBuisness;
