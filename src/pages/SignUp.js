import React from 'react';
import './SignUp.css';
import Navbar from '../layout/Navbar';
import MultiStepForm from './SignUpForm.js';
import Footer from '../layout/Footer';

const SignUp = () => {
  return (
    <div className="signup">
      <div className="content">
        <div className="text">
          <h3>Let's get started.</h3>
          <ol>
            <li>
              Enter your information. Please sign up with your club email.
            </li>
            <li>
              We'll verify and send a confirmation link to your club email.
            </li>
            <li>Click on the confirmation link and sign into sproul.club.</li>
            <li>Begin creating and editing your organization's page!</li>
          </ol>
        </div>
        <div className="form">
          <MultiStepForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { SignUp };
