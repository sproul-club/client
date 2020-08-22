import React from 'react';
import './SignUp.css';
import Navbar from '../layout/Navbar';
import MultiStepForm from './SignUpForm.js';
import Footer from "../layout/Footer";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="content">
          <div className="text">
            <h3>Let's get started.</h3>
            <ol>
              <li>
                <p>Please use your <strong> organization's CalLink email </strong> to register. We will be using your CalLink email to verify your club. </p>
              </li>
              <li>
                We'll send a confirmation link to your club email.
              </li>
              <li>Click on the confirmation link to sign into sproul.club.</li>
              <li>Begin creating and editing your organization's page!</li>
            </ol>
          </div>
          <div className="form">
            <MultiStepForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export { SignUp };
