import React from 'react';
import './SignIn.css';
import Navbar from '../layout/Navbar';
import SignInForm from './SignInForm.js';

const SignIn = () => {
  return (
    <>
      <div className="signin">
        <Navbar />
        <div className="content">
          <div className="form">
            <SignInForm />
          </div>
        </div>
      </div>
    </>
  );
};

export { SignIn };
