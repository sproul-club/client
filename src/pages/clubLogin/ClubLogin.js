import React from 'react';
import './ClubLogin.scss';
import Footer from '../../components/layout/footer/Footer';
import ClubLoginForm from './ClubLoginForm.js';
import loginImage from '../assets/dashboard-flyer-bears.svg';

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
