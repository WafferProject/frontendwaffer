import React, { useState } from "react";
import * as Components from "./signinupcomponents";
import AddButton from "./AddButton";
import "./Signupp.css";
const SignInUpConsumer = () => {
  const [signIn, toggle] = React.useState(true);
  const [phoneNumbers, setPhoneNumbers] = useState([
    { number: "", type: "Work" },
  ]);

  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, { number: "", type: "Work" }]);
  };

  const handlePhoneNumberChange = (index, event) => {
    const values = [...phoneNumbers];
    values[index].number = event.target.value;
    setPhoneNumbers(values);
  };

  const handlePhoneTypeChange = (index, event) => {
    const values = [...phoneNumbers];
    values[index].type = event.target.value;
    setPhoneNumbers(values);
  };
  return (
    <Components.Container classname="FullPageStyling">
      <Components.SignUpContainer signIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account Consumer </Components.Title>
          <Components.Input type="text" placeholder="First Name" required />
          <Components.Input type="text" placeholder="Last Name" required />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <span style={{ marginRight: "10px" }}>Occupation:</span>
            <label style={{ marginRight: "10px" }}>
              <input type="radio" value="Student" name="occupation" required />{" "}
              Student
            </label>
            <label>
              <input type="radio" value="Employee" name="occupation" required />{" "}
              Employee
            </label>
          </div>
          <Components.Input type="tel" placeholder="Phone Number" required />
          <Components.Input type="email" placeholder="Email" required />
          <Components.Input type="password" placeholder="Password" required />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account Business</Components.Title>
          <Components.Input
    type="text"
    placeholder="Tax Registration Number"
    required
    pattern="\d+"
    title="Please enter only numbers."
    style={{ height: "30px", width: "100%" }}
/>

          <Components.Input
            type="text"
            placeholder="Name"
            required
            style={{ height: "30px", width: "100%" }}
          />
          <Components.Input
            type="text"
            placeholder="Location"
            required
            style={{ height: "30px", width: "100%" }}
          />
   {phoneNumbers.map((phoneNumber, index) => (
    <div key={index} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Components.Input 
            type='tel' 
            placeholder={`Phone Number ${index + 1}`} 
            required 
            style={{ height: '30px', width: '90%', marginRight: '10px' }} 
            value={phoneNumber.number} 
            onChange={(event) => handlePhoneNumberChange(index, event)}
        />
        {phoneNumbers.length < 2 && <AddButton onClick={addPhoneNumber} />}
    </div>
))}

          <Components.Input
            type="email"
            placeholder="Email"
            required
            style={{ height: "30px", width: "100%" }}
          />
          <Components.Input
            type="text"
            placeholder="Description"
            required
            style={{ height: "30px", width: "100%" }}
          />

          <Components.Input
            type="password"
            placeholder="Password"
            required
            style={{ height: "30px", width: "100%" }}
          />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signIn={signIn}>
        <Components.Overlay signIn={signIn}>
          <Components.LeftOverlayPanel signIn={signIn}>
            <Components.Title>You Wanna Join Us ?</Components.Title>
            <Components.Paragraph>
              I am a Business and i want to create an account
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign Up Business
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signIn={signIn}>
            <Components.Title>You Wanna Join Us ?</Components.Title>
            <Components.Paragraph>
              I am a Consumer and i want to create an account
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up Consumer
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default SignInUpConsumer;
