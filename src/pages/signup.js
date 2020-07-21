import React from 'react';
import './signup.css';
// import Form from 'react-bootstrap/Form';
import MultiStepForm from "./multistepform.js";

const SignUp = () => {
    return (
        <div className = "signup">
            <div className="header">
                <a href="/catalog">← Back to catalog</a>
                <div className="header-right">
                    <p>Already registered your club?</p>
                    <a href="login">Sign in</a>
                </div>
            </div>
            <div className="content">
                <div className="text">
                    <h3>Let's get started.</h3>
                    <ol>
                        <li>Enter your information. Please sign up with your club email.</li>
                        <li>We'll verify and send a confirmation link to your club email.</li>
                        <li>Click on the confirmation link and sign into sproul.club.</li>
                        <li>Begin creating and editing your organization's page!</li>
                    </ol>
                </div>
                <div className="form">
                    <div className="imageContainer">
                    </div>

                    <h2>Register your club</h2>

                    <div className="formwrapper">
                        <MultiStepForm />
                    </div>

                    {/* <Form className="inputs">
                        <Form.Group controlId="clubname">
                            <Form.Control type="clubname" className="userInput" placeholder="Club Name"/>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Control type="email" className="userInput" placeholder="Email address - use the organization's email" />
                        </Form.Group>
                        <Form.Group controlId="pw">
                            <Form.Control type="password" className="userInput" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="confirm">
                            <Form.Control type="password" className="userInput" placeholder="Confirm password" />
                        </Form.Group>
                    </Form>
                    <div className="nextbutton">
                        <a href="/">Next →</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export { SignUp } ;