import React, { useState } from "react";
import * as Components from "./utilsSignUpIn";
import AddButton from "./AddButton";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { RadioGroup, FormLabel, Radio, FormControlLabel } from "@mui/material";
import { useAuth } from "./AuthContext";

const SignUpConsumerBuisness = () => {
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
        alert("error with signup ");
      });
  };

  const handleInputChange = (event) => {
    console.log(isBuisness ? businessForm : consumerForm);
    const { name, value } = event.target;
    console.log(name + "  " + value);
    const newField = isBuisness
      ? { ...businessForm, [name]: value }
      : { ...consumerForm, [name]: value };
    isBuisness ? setBusinessForm(newField) : setConsumerForm(newField);
  };
  const handleBuisnessPhoneChange = (event, index) => {
    const values = [...businessForm.work_phones];
    values[index] = event.target.value;
    setBusinessForm({ ...businessForm, work_phones: values });
  };

  const addBuisnessPhone = () => {
    setBusinessForm((prevForm) => ({
      ...prevForm,
      work_phones: [...prevForm.work_phones, ""],
    }));
  };

  const handleBuisnessLocationChange = (event) => {
    const { name, value } = event.target;
    const locationValue = [...businessForm.location];

    name === "lat" ? (locationValue[0] = value) : (locationValue[1] = value);

    setBusinessForm({ ...businessForm, location: locationValue });
  };

  return (
    // consumer view
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
          <Components.Input
            name="last_name"
            placeholder="Last Name"
            required
            onChange={handleInputChange}
          />
         


          <FormLabel style={{ marginTop: "10px" }}>Gender</FormLabel>
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
          <Components.Input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={handleInputChange}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handleInputChange}
          />
          
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
            <Components.Input
            name="opening_time"
            placeholder="Opening Time"
            required
            onChange={handleInputChange}
          />
             <Components.Input
            name="closing_time"
            placeholder="closing Time"
            required
            onChange={handleInputChange}
          />

          <Components.Input
            placeholder="Your buisness name"
            name="name"
            required
            style={{ height: "30px", width: "100%" }}
            onChange={handleInputChange}
          />
          <div style={{ display: "flex", gap: "15px" }}>
            <Components.Input
              placeholder="lat"
              name="lat"
              required
              style={{ height: "30px", width: "30%" }}
              onChange={handleBuisnessLocationChange}
            />
            <Components.Input
              placeholder="long"
              name="long"
              required
              style={{ height: "30px", width: "30%" }}
              onChange={handleBuisnessLocationChange}
            />
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
