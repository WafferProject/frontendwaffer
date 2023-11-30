import React from "react";
import * as Components from './utilsSignUpIn';

const SignInConsumerBuisness = () => {
    const [signIn, toggle] = React.useState(true);
    return(
        <Components.Container>
          
            <Components.SignUpContainer signIn={signIn}>
            <Components.Form>
                    <Components.Title>Sign in Consumer </Components.Title>
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button>Sign In</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

      

            <Components.SignInContainer signIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign in Business </Components.Title>
                    <Components.Input type='Tax Registration Number ' placeholder='Tax Registration Number ' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button>Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signIn={signIn}>
                <Components.Overlay signIn={signIn}>

                    <Components.LeftOverlayPanel signIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                        I am a Business and I want to sign in
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In Business 
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signIn={signIn}>
                        <Components.Title>Hello, There !</Components.Title>
                        <Components.Paragraph>
                        I am a Consumer and I want to sign in
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign in Consumer
                        </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
    )
}

export default SignInConsumerBuisness;