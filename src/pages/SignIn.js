import React from 'react';
import './SignIn.css';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
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
        <Footer />
      </div>
    </>
  );
};

export { SignIn };
