import React ,{useState}from "react";
import * as Components from "./utilsSignUpIn";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Alert from '@mui/material/Alert';
const SignInConsumerBuisness = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const { isBuisness, setIsBuisness, setIsAuthenticated } = useAuth();

  const [businessForm, setBusinessForm] = React.useState({
    tax_registration_number: "",
    password: "",
  });
  const [consumerForm, setConsumerForm] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    console.log(isBuisness ? businessForm : consumerForm);
    const { name, value } = event.target;
    console.log(name + "  " + value);
    const newField = isBuisness
      ? { ...businessForm, [name]: value }
      : { ...consumerForm, [name]: value };
    isBuisness ? setBusinessForm(newField) : setConsumerForm(newField);
  };
  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const entity = isBuisness ? "buisness" : "consumer";
    const url = `http://localhost:8080/api/${entity}/login`;
    const signInObj = isBuisness ? businessForm : consumerForm;

    axios
      .post(url, signInObj, { withCredentials: true })
      .then((response) => {
        console.log(
          "server responded from " +
            url +
            " with " +
            JSON.stringify(response.data)
        );
        setIsAuthenticated(true);
        nav(`/${entity}`);
      })
      .catch((error) => {
        if (error.response.status === 303) {
          alert(
            "already logged in as  " +
              (isBuisness ? "business" : "consumer") +
              "please logout first"
          );
        } else {
          setAlertOpen(true);
        }
      });
  };
  return (
    <Components.Container>
      {/* consumer view signin  */}
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
         incorrect credentials
  
             
         </Alert>)}
      <Components.SignUpContainer signIn={isBuisness}>
        <Components.Form>
          <Components.Title>Sign in Consumer </Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button onClick={handleSubmit}>Sign In</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      {/* buisness view signin  */}

      <Components.SignInContainer signIn={isBuisness}>
        <Components.Form>
          <Components.Title>Sign in Business </Components.Title>
          <Components.Input
            name="tax_registration_number"
            placeholder="Tax Registration Number "
            onChange={handleInputChange}
          />
          <Components.Input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleInputChange}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button onClick={handleSubmit}>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signIn={isBuisness}>
        <Components.Overlay signIn={isBuisness}>
          <Components.LeftOverlayPanel signIn={isBuisness}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              I am a Business and I want to sign in
            </Components.Paragraph>
            <Components.GhostButton onClick={() => setIsBuisness(true)}>
              Sign In Business
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signIn={isBuisness}>
            <Components.Title>Hello, There !</Components.Title>
            <Components.Paragraph>
              I am a Consumer and I want to sign in
            </Components.Paragraph>
            <Components.GhostButton onClick={() => setIsBuisness(false)}>
              Sign in Consumer
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default SignInConsumerBuisness;
