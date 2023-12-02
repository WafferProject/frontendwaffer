import React from "react";
import * as Components from "./utilsSignUpIn";
import axios from "axios";
import { Link } from "react-router-dom";

const SignInConsumerBuisness = () => {
  const [isBuisness, toggleIsBuisness] = React.useState(false);

  const [businessForm, setBusinessForm] = React.useState({
    tax_registration_number: "t",
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
        alert("successful login , token attached redirect to dashboard");
      })
      .catch((error) => {
        console.log("error  " + JSON.stringify(error.response.data));
        alert("error with login ");
      });
  };
  return (
    <Components.Container>
      {/* consumer view signin  */}
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
          <Link to="/consumer">
            <Components.Button onClick={handleSubmit}>
              Sign In
            </Components.Button>
          </Link>
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
          <Link to="/buisness">
            <Components.Button onClick={handleSubmit}>
              Sign In
            </Components.Button>
          </Link>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signIn={isBuisness}>
        <Components.Overlay signIn={isBuisness}>
          <Components.LeftOverlayPanel signIn={isBuisness}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              I am a Business and I want to sign in
            </Components.Paragraph>
            <Components.GhostButton
              onClick={() => toggleIsBuisness(!isBuisness)}
            >
              Sign In Business
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signIn={isBuisness}>
            <Components.Title>Hello, There !</Components.Title>
            <Components.Paragraph>
              I am a Consumer and I want to sign in
            </Components.Paragraph>
            <Components.GhostButton
              onClick={() => toggleIsBuisness(!isBuisness)}
            >
              Sign in Consumer
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default SignInConsumerBuisness;
