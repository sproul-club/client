import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

import MultiStepForm from './twostepform.js';

const SignUp = () => {
  return (
    <div className="signup">
      <div className="header">
        <Link to="/catalog">← Back to catalog</Link>
        <div className="header-right">
          <p>Already registered your club?</p>
          <Link href="/signin">Sign in</Link>
        </div>
      </div>
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
    </div>
  );
};

export { SignUp };
