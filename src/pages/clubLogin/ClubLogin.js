import React from 'react';
import './ClubLogin.css';
import Footer from '../../components/layout/footer/Footer';
import ClubLoginForm from './ClubLoginForm.js';
import loginImage from '../assets/login.png';

const SignIn = () => {
  return (
    <div className="signin">
      <div className="content">
        <img src={loginImage} className="loginImage" alt="bears" />
        <div className="form">
          <ClubLoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { SignIn };
